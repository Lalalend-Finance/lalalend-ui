import { fireEvent, waitFor } from '@testing-library/react';
import BigNumber from 'bignumber.js';
import noop from 'noop-ts';
import React from 'react';

import vaiVaultResponses from '__mocks__/contracts/sebVault';
import fakeAccountAddress from '__mocks__/models/address';
import fakeTransactionReceipt from '__mocks__/models/transactionReceipt';
import { getAllowance, getSebVaultUserInfo, withdrawFromSebVault } from 'clients/api';
import formatToUserInfo from 'clients/api/queries/getSebVaultUserInfo/formatToUserInfo';
import MAX_UINT256 from 'constants/maxUint256';
import renderComponent from 'testUtils/renderComponent';
import en from 'translation/translations/en.json';

import WithdrawFromSebVaultModal, { WithdrawFromSebVaultModalProps } from '.';
import TEST_IDS from '../../TransactionForm/testIds';

jest.mock('clients/api');

const fakeSebVaultUserInfo = formatToUserInfo(vaiVaultResponses.userInfo);

const baseProps: WithdrawFromSebVaultModalProps = {
  handleClose: noop,
};

describe('pages/Vault/modals/WithdrawFromSebVaultModal', () => {
  beforeEach(() => {
    // Mark token as enabled
    (getAllowance as jest.Mock).mockImplementation(() => ({
      allowanceWei: MAX_UINT256,
    }));
    (getSebVaultUserInfo as jest.Mock).mockImplementation(() => fakeSebVaultUserInfo);
  });

  it('renders without crashing', async () => {
    renderComponent(<WithdrawFromSebVaultModal {...baseProps} />);
  });

  it('fetches and displays the user balance correctly', async () => {
    const { getByTestId } = renderComponent(<WithdrawFromSebVaultModal {...baseProps} />, {
      authContextValue: {
        account: {
          address: fakeAccountAddress,
        },
      },
    });

    await waitFor(() =>
      expect(getByTestId(TEST_IDS.availableTokens).textContent).toMatchSnapshot(),
    );
  });

  it('calls stake function then calls handleClose callback on success', async () => {
    (withdrawFromSebVault as jest.Mock).mockImplementation(() => fakeTransactionReceipt);

    const customProps: WithdrawFromSebVaultModalProps = {
      ...baseProps,
      handleClose: jest.fn(),
    };

    const { getByTestId, getByText } = renderComponent(
      <WithdrawFromSebVaultModal {...customProps} />,
      {
        authContextValue: {
          account: {
            address: fakeAccountAddress,
          },
        },
      },
    );

    await waitFor(() => getByTestId(TEST_IDS.tokenTextField));

    const fakeValueTokens = '100';

    // Enter amount in input
    fireEvent.change(getByTestId(TEST_IDS.tokenTextField), {
      target: { value: fakeValueTokens },
    });

    await waitFor(() => getByText(en.withdrawFromSebVaultModal.submitButtonLabel));

    // Submit form
    const submitButton = getByText(en.withdrawFromSebVaultModal.submitButtonLabel).closest(
      'button',
    ) as HTMLButtonElement;
    fireEvent.click(submitButton);

    const fakeStakedWei = new BigNumber(fakeValueTokens).multipliedBy(new BigNumber(10).pow(18));

    await waitFor(() => expect(withdrawFromSebVault).toHaveBeenCalledTimes(1));
    expect(withdrawFromSebVault).toHaveBeenCalledWith({
      fromAccountAddress: fakeAccountAddress,
      amountWei: fakeStakedWei,
    });

    await waitFor(() => expect(customProps.handleClose).toHaveBeenCalledTimes(1));
  });
});
