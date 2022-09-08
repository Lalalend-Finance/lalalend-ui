import { fireEvent, waitFor } from '@testing-library/react';
import BigNumber from 'bignumber.js';
import React from 'react';
import { TokenId } from 'types';

import fakeAccountAddress from '__mocks__/models/address';
import { stakeInSebVault, stakeInVrtVault, stakeInMiaVault } from 'clients/api';
import { TOKENS_EVMOS } from 'constants/tokens';
import renderComponent from 'testUtils/renderComponent';

import useStakeInVault from './useStakeInVault';

jest.mock('clients/api');

const fakeAmountWei = new BigNumber('10000000000000000');
const fakeStakeButtonLabel = 'Stake';

describe('hooks/useStakeInVault', () => {
  it('calls stakeInMiaVault with correct parameters when calling stake a poolIndex', async () => {
    const fakePoolIndex = 6;

    const TestComponent: React.FC = () => {
      const { stake } = useStakeInVault({
        stakedTokenId: TOKENS_EVMOS.seb.id as TokenId,
        rewardTokenId: TOKENS_EVMOS.mia.id as TokenId,
        poolIndex: fakePoolIndex,
      });

      return (
        <>
          <button
            onClick={() =>
              stake({
                amountWei: fakeAmountWei,
                accountAddress: fakeAccountAddress,
              })
            }
            type="button"
          >
            {fakeStakeButtonLabel}
          </button>
        </>
      );
    };

    const { getByText } = renderComponent(<TestComponent />);

    // Click on stake button
    fireEvent.click(getByText(fakeStakeButtonLabel));

    await waitFor(() => expect(stakeInMiaVault).toHaveBeenCalledTimes(1));
    expect(stakeInMiaVault).toHaveBeenCalledWith({
      amountWei: fakeAmountWei,
      fromAccountAddress: fakeAccountAddress,
      poolIndex: fakePoolIndex,
      rewardTokenAddress: TOKENS_EVMOS.mia.address,
    });
  });

  it('calls stakeInSebVault with correct parameters when calling stake without a poolIndex and stakedTokenId is equal to "seb"', async () => {
    const TestComponent: React.FC = () => {
      const { stake } = useStakeInVault({
        stakedTokenId: TOKENS_EVMOS.seb.id as TokenId,
        rewardTokenId: TOKENS_EVMOS.mia.id as TokenId,
      });

      return (
        <>
          <button
            onClick={() =>
              stake({
                amountWei: fakeAmountWei,
                accountAddress: fakeAccountAddress,
              })
            }
            type="button"
          >
            {fakeStakeButtonLabel}
          </button>
        </>
      );
    };

    const { getByText } = renderComponent(<TestComponent />);

    // Click on stake button
    fireEvent.click(getByText(fakeStakeButtonLabel));

    await waitFor(() => expect(stakeInSebVault).toHaveBeenCalledTimes(1));
    expect(stakeInSebVault).toHaveBeenCalledWith({
      amountWei: fakeAmountWei,
      fromAccountAddress: fakeAccountAddress,
    });
  });

  it('calls stakeInVrtVault with correct parameters when calling stake without a poolIndex and stakedTokenId is equal to "vrt"', async () => {
    const TestComponent: React.FC = () => {
      const { stake } = useStakeInVault({
        stakedTokenId: TOKENS_EVMOS.vrt.id as TokenId,
        rewardTokenId: TOKENS_EVMOS.mia.id as TokenId,
      });

      return (
        <>
          <button
            onClick={() =>
              stake({
                amountWei: fakeAmountWei,
                accountAddress: fakeAccountAddress,
              })
            }
            type="button"
          >
            {fakeStakeButtonLabel}
          </button>
        </>
      );
    };

    const { getByText } = renderComponent(<TestComponent />);

    // Click on stake button
    fireEvent.click(getByText(fakeStakeButtonLabel));

    await waitFor(() => expect(stakeInVrtVault).toHaveBeenCalledTimes(1));
    expect(stakeInVrtVault).toHaveBeenCalledWith({
      amountWei: fakeAmountWei,
      fromAccountAddress: fakeAccountAddress,
    });
  });
});
