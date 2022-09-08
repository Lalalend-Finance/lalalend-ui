import { fireEvent, waitFor } from '@testing-library/react';
import BigNumber from 'bignumber.js';
import React from 'react';

import fakeAddress from '__mocks__/models/address';
import fakeTransactionReceipt from '__mocks__/models/transactionReceipt';
import { claimMiaReward, getMiaReward } from 'clients/api';
import useSuccessfulTransactionModal from 'hooks/useSuccessfulTransactionModal';
import renderComponent from 'testUtils/renderComponent';

import ClaimMiaRewardButton from '.';
import TEST_IDS from '../testIds';

jest.mock('clients/api');
jest.mock('hooks/useSuccessfulTransactionModal');

describe('pages/Dashboard/ClaimMiaRewardButton', () => {
  it('renders without crashing', () => {
    renderComponent(<ClaimMiaRewardButton />);
  });

  it('renders nothing if user have not connected any wallet', () => {
    const { queryAllByTestId } = renderComponent(<ClaimMiaRewardButton />);
    expect(queryAllByTestId(TEST_IDS.claimMiaRewardButton)).toHaveLength(0);
  });

  it('renders nothing if user have no claimable MIA reward', () => {
    const { queryAllByTestId } = renderComponent(() => <ClaimMiaRewardButton />, {
      authContextValue: {
        account: {
          address: fakeAddress,
        },
      },
    });
    expect(queryAllByTestId(TEST_IDS.claimMiaRewardButton)).toHaveLength(0);
  });

  it('renders correct MIA reward when user are connected and have claimable MIA reward', async () => {
    (getMiaReward as jest.Mock).mockImplementationOnce(async () => ({
      miaRewardWei: new BigNumber('10000000000000000'),
    }));

    const { getByTestId } = renderComponent(() => <ClaimMiaRewardButton />, {
      authContextValue: {
        account: {
          address: fakeAddress,
        },
      },
    });

    await waitFor(() => expect(getByTestId(TEST_IDS.claimMiaRewardButton)));
    expect(getByTestId(TEST_IDS.claimMiaRewardButton).textContent).toContain('0.01 MIA');
  });

  it('it claims MIA reward on click and displays successful transaction modal on success', async () => {
    const fakeMiaReward = new BigNumber('10000000000000000');

    const { openSuccessfulTransactionModal } = useSuccessfulTransactionModal();
    (getMiaReward as jest.Mock).mockImplementationOnce(async () => ({
      miaRewardWei: fakeMiaReward,
    }));
    (claimMiaReward as jest.Mock).mockImplementationOnce(async () => fakeTransactionReceipt);

    const { getByTestId } = renderComponent(() => <ClaimMiaRewardButton />, {
      authContextValue: {
        account: {
          address: fakeAddress,
        },
      },
    });

    await waitFor(() => expect(getByTestId(TEST_IDS.claimMiaRewardButton)));

    // Trigger claim
    fireEvent.click(getByTestId(TEST_IDS.claimMiaRewardButton));

    // Check claimMiaReward was called and success toast was displayed
    await waitFor(() => expect(claimMiaReward).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(openSuccessfulTransactionModal).toHaveBeenCalledTimes(1));
    expect(openSuccessfulTransactionModal).toHaveBeenCalledWith({
      transactionHash: fakeTransactionReceipt.transactionHash,
      amount: {
        tokenId: 'mia',
        valueWei: fakeMiaReward,
      },
      content: expect.any(String),
      title: expect.any(String),
    });
  });
});
