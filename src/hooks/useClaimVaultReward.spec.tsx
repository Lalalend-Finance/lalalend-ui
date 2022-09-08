import { fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { TokenId } from 'types';

import fakeAccountAddress from '__mocks__/models/address';
import { claimSebVaultReward, claimVrtVaultReward, claimMiaVaultReward } from 'clients/api';
import { TOKENS_EVMOS } from 'constants/tokens';
import renderComponent from 'testUtils/renderComponent';

import useClaimVaultReward from './useClaimVaultReward';

jest.mock('clients/api');

const fakeClaimRewardButtonLabel = 'Claim reward';

describe('hooks/useClaimVaultReward', () => {
  it('calls claimMiaVaultReward with correct parameters when calling stake a poolIndex', async () => {
    const fakePoolIndex = 6;

    const TestComponent: React.FC = () => {
      const { claimReward } = useClaimVaultReward();

      return (
        <>
          <button
            onClick={() =>
              claimReward({
                stakedTokenId: TOKENS_EVMOS.seb.id as TokenId,
                rewardTokenId: TOKENS_EVMOS.mia.id as TokenId,
                accountAddress: fakeAccountAddress,
                poolIndex: fakePoolIndex,
              })
            }
            type="button"
          >
            {fakeClaimRewardButtonLabel}
          </button>
        </>
      );
    };

    const { getByText } = renderComponent(<TestComponent />);

    // Click on claim reward button
    fireEvent.click(getByText(fakeClaimRewardButtonLabel));

    await waitFor(() => expect(claimMiaVaultReward).toHaveBeenCalledTimes(1));
    expect(claimMiaVaultReward).toHaveBeenCalledWith({
      fromAccountAddress: fakeAccountAddress,
      poolIndex: fakePoolIndex,
      rewardTokenAddress: TOKENS_EVMOS.mia.address,
    });
  });

  it('calls claimSebVaultReward with correct parameters when calling stake without a poolIndex and stakedTokenId is equal to "seb"', async () => {
    const TestComponent: React.FC = () => {
      const { claimReward } = useClaimVaultReward();

      return (
        <>
          <button
            onClick={() =>
              claimReward({
                stakedTokenId: TOKENS_EVMOS.seb.id as TokenId,
                rewardTokenId: TOKENS_EVMOS.mia.id as TokenId,
                accountAddress: fakeAccountAddress,
              })
            }
            type="button"
          >
            {fakeClaimRewardButtonLabel}
          </button>
        </>
      );
    };

    const { getByText } = renderComponent(<TestComponent />);

    // Click on claim reward button
    fireEvent.click(getByText(fakeClaimRewardButtonLabel));

    await waitFor(() => expect(claimSebVaultReward).toHaveBeenCalledTimes(1));
    expect(claimSebVaultReward).toHaveBeenCalledWith({
      fromAccountAddress: fakeAccountAddress,
    });
  });

  it('calls claimVrtVaultReward with correct parameters when calling stake without a poolIndex and stakedTokenId is equal to "vrt"', async () => {
    const TestComponent: React.FC = () => {
      const { claimReward } = useClaimVaultReward();

      return (
        <>
          <button
            onClick={() =>
              claimReward({
                stakedTokenId: TOKENS_EVMOS.vrt.id as TokenId,
                rewardTokenId: TOKENS_EVMOS.mia.id as TokenId,
                accountAddress: fakeAccountAddress,
              })
            }
            type="button"
          >
            {fakeClaimRewardButtonLabel}
          </button>
        </>
      );
    };

    const { getByText } = renderComponent(<TestComponent />);

    // Click on claim reward button
    fireEvent.click(getByText(fakeClaimRewardButtonLabel));

    await waitFor(() => expect(claimVrtVaultReward).toHaveBeenCalledTimes(1));
    expect(claimVrtVaultReward).toHaveBeenCalledWith({
      fromAccountAddress: fakeAccountAddress,
    });
  });
});
