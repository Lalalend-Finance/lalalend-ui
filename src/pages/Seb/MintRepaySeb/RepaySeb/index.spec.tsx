import { fireEvent, waitFor } from '@testing-library/react';
import BigNumber from 'bignumber.js';
import React from 'react';
import { formatTokensToReadableValue } from 'utilities';

import fakeAccountAddress from '__mocks__/models/address';
import { assetData } from '__mocks__/models/asset';
import fakeTransactionReceipt from '__mocks__/models/transactionReceipt';
import {
  getAllowance,
  getBalanceOf,
  getMintedSeb,
  repaySeb,
  useGetUserMarketInfo,
} from 'clients/api';
import MAX_UINT256 from 'constants/maxUint256';
import useSuccessfulTransactionModal from 'hooks/useSuccessfulTransactionModal';
import renderComponent from 'testUtils/renderComponent';
import en from 'translation/translations/en.json';

import RepaySeb from '.';

jest.mock('clients/api');
jest.mock('components/Toast');
jest.mock('hooks/useSuccessfulTransactionModal');

const fakeUserSebBalanceWei = new BigNumber(0);

const fakeUserSebMintedWei = new BigNumber('100000000000000000000');
const fakeUserSebMintedTokens = fakeUserSebMintedWei.dividedBy(1e18);
const formattedFakeUserSebMinted = formatTokensToReadableValue({
  value: fakeUserSebMintedTokens,
  tokenId: 'seb',
});

const fakeSeb = { ...assetData, id: 'seb', symbol: 'VAI' };

describe('pages/Dashboard/MintRepaySeb/RepaySeb', () => {
  beforeEach(() => {
    // Mark token as enabled
    (getAllowance as jest.Mock).mockImplementation(() => ({
      allowanceWei: MAX_UINT256,
    }));
    (getMintedSeb as jest.Mock).mockImplementation(() => ({
      mintedSebWei: fakeUserSebMintedWei,
    }));
    (getBalanceOf as jest.Mock).mockImplementation(() => ({ balanceWei: fakeUserSebBalanceWei }));
    (useGetUserMarketInfo as jest.Mock).mockImplementation(() => ({
      data: {
        assets: [...assetData, fakeSeb],
        userTotalBorrowLimitCents: new BigNumber('111'),
        userTotalBorrowBalanceCents: new BigNumber('91'),
      },
      isLoading: false,
    }));
  });

  it('renders without crashing', () => {
    renderComponent(() => <RepaySeb />, {
      authContextValue: {
        account: {
          address: fakeAccountAddress,
        },
      },
    });
  });

  it('displays the correct repay VAI balance', async () => {
    const { getByText } = renderComponent(() => <RepaySeb />, {
      authContextValue: {
        account: {
          address: fakeAccountAddress,
        },
      },
    });
    await waitFor(() => getByText(en.mintRepaySeb.repaySeb.btnRepaySeb));

    // Check user repay VAI balance displays correctly
    await waitFor(() => getByText(formattedFakeUserSebMinted));
  });

  it('lets user repay their VAI balance', async () => {
    const { openSuccessfulTransactionModal } = useSuccessfulTransactionModal();
    (repaySeb as jest.Mock).mockImplementationOnce(async () => fakeTransactionReceipt);
    (getBalanceOf as jest.Mock).mockImplementation(async () => ({
      balanceWei: fakeUserSebMintedWei,
    }));

    const fakeInput = fakeUserSebMintedWei.dividedBy(1e18);

    const { getByText, getByPlaceholderText } = renderComponent(() => <RepaySeb />, {
      authContextValue: {
        account: {
          address: fakeAccountAddress,
        },
      },
    });
    await waitFor(() => getByText(en.mintRepaySeb.repaySeb.btnRepaySeb));

    // Input amount
    const tokenTextFieldInput = getByPlaceholderText('0.00') as HTMLInputElement;
    fireEvent.change(tokenTextFieldInput, { target: { value: fakeInput.toFixed() } });

    // Check input value updated correctly
    expect(tokenTextFieldInput.value).toBe(fakeInput.toFixed());

    // Submit repayment request
    const submitButton = getByText(en.mintRepaySeb.repaySeb.btnRepaySeb).closest(
      'button',
    ) as HTMLButtonElement;
    await waitFor(() => expect(submitButton).toBeEnabled());
    fireEvent.click(submitButton);

    // Check repaySeb was called correctly
    await waitFor(() => expect(repaySeb).toHaveBeenCalledTimes(1));
    const fakeUserWeiMinted = fakeInput.multipliedBy(new BigNumber(10).pow(18));
    expect(repaySeb).toHaveBeenCalledWith({
      fromAccountAddress: fakeAccountAddress,
      amountWei: fakeUserWeiMinted.toFixed(),
    });

    // Check successful transaction modal is displayed
    await waitFor(() => expect(openSuccessfulTransactionModal).toHaveBeenCalledTimes(1));
    expect(openSuccessfulTransactionModal).toHaveBeenCalledWith({
      transactionHash: fakeTransactionReceipt.transactionHash,
      amount: {
        tokenId: 'seb',
        valueWei: fakeUserWeiMinted,
      },
      content: expect.any(String),
      title: expect.any(String),
    });
  });
  // @TODO: add tests to cover failing scenarios
});
