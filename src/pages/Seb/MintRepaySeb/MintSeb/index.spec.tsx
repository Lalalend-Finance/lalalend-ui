import { fireEvent, waitFor } from '@testing-library/react';
import BigNumber from 'bignumber.js';
import React from 'react';
import { TokenId } from 'types';
import { formatTokensToReadableValue } from 'utilities';

import vaiUnitrollerResponses from '__mocks__/contracts/sebUnitroller';
import fakeAccountAddress from '__mocks__/models/address';
import { assetData } from '__mocks__/models/asset';
import fakeTransactionReceipt from '__mocks__/models/transactionReceipt';
import {
  getAllowance,
  getMintableSeb,
  getSebTreasuryPercentage,
  mintSeb,
  useGetUserMarketInfo,
} from 'clients/api';
import formatToGetMintableSebOutput from 'clients/api/queries/getMintableSeb/formatToOutput';
import MAX_UINT256 from 'constants/maxUint256';
import { TOKENS_EVMOS } from 'constants/tokens';
import useSuccessfulTransactionModal from 'hooks/useSuccessfulTransactionModal';
import renderComponent from 'testUtils/renderComponent';
import en from 'translation/translations/en.json';

import RepaySeb from '.';

jest.mock('clients/api');
jest.mock('components/Toast');
jest.mock('hooks/useSuccessfulTransactionModal');

const fakeSeb = { ...assetData, id: TOKENS_EVMOS.seb.id as TokenId, symbol: TOKENS_EVMOS.seb.symbol };

const fakeGetMintableSebOutput = formatToGetMintableSebOutput(
  vaiUnitrollerResponses.getMintableVAI,
);

const fakeMintableSebTokens = fakeGetMintableSebOutput.mintableSebWei.dividedBy(1e18);
const formattedFakeMintableSeb = formatTokensToReadableValue({
  value: fakeMintableSebTokens,
  tokenId: TOKENS_EVMOS.seb.id as TokenId,
});
const fakeSebTreasuryPercentage = 7.19;

describe('pages/Dashboard/MintRepaySeb/MintSeb', () => {
  beforeEach(() => {
    // Mark token as enabled
    (getAllowance as jest.Mock).mockImplementation(() => ({
      allowanceWei: MAX_UINT256,
    }));
    (getMintableSeb as jest.Mock).mockImplementation(() => fakeGetMintableSebOutput);
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

  it('displays the correct available VAI limit and mint fee', async () => {
    (getSebTreasuryPercentage as jest.Mock).mockImplementationOnce(async () => ({
      percentage: fakeSebTreasuryPercentage,
    }));

    const { getByText } = renderComponent(() => <RepaySeb />, {
      authContextValue: {
        account: {
          address: fakeAccountAddress,
        },
      },
    });

    // Check available VAI limit displays correctly
    await waitFor(() => getByText(formattedFakeMintableSeb));
    // Check mint fee displays correctly
    await waitFor(() => getByText(`0 VAI (${fakeSebTreasuryPercentage.toString()}%)`));
  });

  it('lets user mint VAI', async () => {
    const { openSuccessfulTransactionModal } = useSuccessfulTransactionModal();
    (mintSeb as jest.Mock).mockImplementationOnce(async () => fakeTransactionReceipt);

    const { getByText, getByPlaceholderText } = renderComponent(() => <RepaySeb />, {
      authContextValue: {
        account: {
          address: fakeAccountAddress,
        },
      },
    });
    await waitFor(() => getByText(en.mintRepaySeb.mintSeb.btnMintSeb));

    // Click on "SAFE MAX" button
    const safeMaxButton = getByText(en.mintRepaySeb.mintSeb.rightMaxButtonLabel).closest(
      'button',
    ) as HTMLButtonElement;
    fireEvent.click(safeMaxButton);

    // Check input value updated to max amount of mintable VAI
    const tokenTextFieldInput = getByPlaceholderText('0.00') as HTMLInputElement;
    await waitFor(() => expect(tokenTextFieldInput.value).toBe(fakeMintableSebTokens.toFixed()));

    // Submit repayment request
    const submitButton = getByText(en.mintRepaySeb.mintSeb.btnMintSeb).closest(
      'button',
    ) as HTMLButtonElement;
    await waitFor(() => expect(submitButton).toBeEnabled());
    fireEvent.click(submitButton);

    // Check mintSeb was called correctly
    await waitFor(() => expect(mintSeb).toHaveBeenCalledTimes(1));
    const fakeWeiMinted = fakeMintableSebTokens.multipliedBy(1e18);
    expect(mintSeb).toHaveBeenCalledWith({
      fromAccountAddress: fakeAccountAddress,
      amountWei: fakeWeiMinted,
    });

    // Check successful transaction modal is displayed
    await waitFor(() => expect(openSuccessfulTransactionModal).toHaveBeenCalledTimes(1));
    expect(openSuccessfulTransactionModal).toHaveBeenCalledWith({
      transactionHash: fakeTransactionReceipt.transactionHash,
      amount: {
        tokenId: TOKENS_EVMOS.seb.id as TokenId,
        valueWei: fakeWeiMinted,
      },
      content: expect.any(String),
      title: expect.any(String),
    });
  });
  // @TODO: add tests to cover failing scenarios
});
