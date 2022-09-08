import { act, fireEvent, waitFor } from '@testing-library/react';
import BigNumber from 'bignumber.js';
import noop from 'noop-ts';
import React from 'react';
import { TokenId } from 'types';

import miaVaultResponses from '__mocks__/contracts/miaVault';
import fakeAddress from '__mocks__/models/address';
import {
  getAllowance,
  getMiaVaultLockedDeposits,
  getMiaVaultPoolInfo,
  getMiaVaultUserInfo,
  requestWithdrawalFromMiaVault,
} from 'clients/api';
import formatToLockedDeposit from 'clients/api/queries/getMiaVaultLockedDeposits/formatToLockedDeposit';
import formatToPoolInfo from 'clients/api/queries/getMiaVaultPoolInfo/formatToPoolInfo';
import formatToUserInfo from 'clients/api/queries/getMiaVaultUserInfo/formatToUserInfo';
import MAX_UINT256 from 'constants/maxUint256';
import { TOKENS_EVMOS } from 'constants/tokens';
import renderComponent from 'testUtils/renderComponent';
import en from 'translation/translations/en.json';

import RequestWithdrawal from '.';
import TEST_IDS from '../../../TransactionForm/testIds';

jest.mock('clients/api');

const fakeStakedTokenId = TOKENS_EVMOS.seb.id as TokenId;
const fakePoolIndex = 6;

describe('pages/Vault/modals/WithdrawFromVestingVaultModal/RequestWithdrawal', () => {
  beforeEach(() => {
    // Mark token as enabled
    (getAllowance as jest.Mock).mockImplementation(() => ({
      allowanceWei: MAX_UINT256,
    }));
    (getMiaVaultLockedDeposits as jest.Mock).mockImplementation(() => ({
      lockedDeposits: miaVaultResponses.getWithdrawalRequests.map(formatToLockedDeposit),
    }));
    (getMiaVaultUserInfo as jest.Mock).mockImplementation(() =>
      formatToUserInfo(miaVaultResponses.userInfo),
    );
    (getMiaVaultPoolInfo as jest.Mock).mockImplementation(() =>
      formatToPoolInfo(miaVaultResponses.poolInfo),
    );
  });

  it('renders without crashing', async () => {
    const { getByTestId } = renderComponent(
      <RequestWithdrawal
        stakedTokenId={fakeStakedTokenId}
        poolIndex={fakePoolIndex}
        handleClose={noop}
        handleDisplayWithdrawalRequestList={noop}
      />,
      {
        authContextValue: { account: { address: fakeAddress } },
      },
    );

    await waitFor(() => getByTestId(TEST_IDS.availableTokens));
  });

  it('fetches staked tokens and locking period and displays them correctly', async () => {
    const { getByTestId } = renderComponent(
      <RequestWithdrawal
        stakedTokenId={fakeStakedTokenId}
        poolIndex={fakePoolIndex}
        handleClose={noop}
        handleDisplayWithdrawalRequestList={noop}
      />,
      {
        authContextValue: { account: { address: fakeAddress } },
      },
    );

    await waitFor(() => getByTestId(TEST_IDS.availableTokens));

    expect(getByTestId(TEST_IDS.availableTokens).textContent).toMatchSnapshot();
    expect(getByTestId(TEST_IDS.lockingPeriod).textContent).toMatchSnapshot();
  });

  it('calls handleDisplayWithdrawalRequestList callback when clicking on "Withdrawal request list" button', async () => {
    const handleDisplayWithdrawalRequestListMock = jest.fn();

    const { getByText } = renderComponent(
      <RequestWithdrawal
        stakedTokenId={fakeStakedTokenId}
        poolIndex={fakePoolIndex}
        handleClose={noop}
        handleDisplayWithdrawalRequestList={handleDisplayWithdrawalRequestListMock}
      />,
      {
        authContextValue: { account: { address: fakeAddress } },
      },
    );

    await waitFor(() =>
      getByText(
        en.withdrawFromVestingVaultModalModal.requestWithdrawalTab
          .displayWithdrawalRequestListButton,
      ),
    );

    fireEvent.click(
      getByText(
        en.withdrawFromVestingVaultModalModal.requestWithdrawalTab
          .displayWithdrawalRequestListButton,
      ),
    );

    await waitFor(() => expect(handleDisplayWithdrawalRequestListMock).toHaveBeenCalledTimes(1));
  });

  it('lets user request a withdrawal and calls handleClose callback on success', async () => {
    const handleCloseMock = jest.fn();

    const { getByTestId, getByText } = renderComponent(
      <RequestWithdrawal
        stakedTokenId={fakeStakedTokenId}
        poolIndex={fakePoolIndex}
        handleClose={handleCloseMock}
        handleDisplayWithdrawalRequestList={noop}
      />,
      {
        authContextValue: { account: { address: fakeAddress } },
      },
    );

    await waitFor(() => getByTestId(TEST_IDS.availableTokens));

    const fakeValueTokens = '10';

    // Enter amount in input
    act(() => {
      fireEvent.change(getByTestId(TEST_IDS.tokenTextField), {
        target: { value: fakeValueTokens },
      });
    });

    // Submit form
    await waitFor(() =>
      expect(
        getByText(en.withdrawFromVestingVaultModalModal.requestWithdrawalTab.submitButtonLabel),
      ),
    );

    const submitButton = getByText(
      en.withdrawFromVestingVaultModalModal.requestWithdrawalTab.submitButtonLabel,
    ).closest('button') as HTMLButtonElement;

    fireEvent.click(submitButton);

    const fakeWeiSubmitted = new BigNumber(fakeValueTokens).multipliedBy(new BigNumber(10).pow(18));

    await waitFor(() => expect(requestWithdrawalFromMiaVault).toHaveBeenCalledTimes(1));
    expect(requestWithdrawalFromMiaVault).toHaveBeenCalledWith({
      amountWei: fakeWeiSubmitted,
      fromAccountAddress: fakeAddress,
      poolIndex: fakePoolIndex,
      rewardTokenAddress: TOKENS_EVMOS.mia.address,
    });

    await waitFor(() => expect(handleCloseMock).toHaveBeenCalledTimes(1));
  });
});
