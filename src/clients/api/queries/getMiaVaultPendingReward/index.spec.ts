import BigNumber from 'bignumber.js';

import fakeAccountAddress from '__mocks__/models/address';
import { TOKENS_EVMOS } from 'constants/tokens';
import { MiaVault } from 'types/contracts';

import getMiaVaultPendingReward from '.';

const miaTokenAddress = TOKENS_EVMOS.mia.address;
const fakePid = 1;

describe('api/queries/getMiaVaultPendingReward', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        pendingReward: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as MiaVault;

    try {
      await getMiaVaultPendingReward({
        miaVaultContract: fakeContract,
        rewardTokenAddress: miaTokenAddress,
        accountAddress: fakeAccountAddress,
        poolIndex: fakePid,
      });

      throw new Error('getMiaVaultTotalAllocationPoints should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the pending reward of the user in wei on success', async () => {
    const fakeOutput = '2000000000000000000';

    const callMock = jest.fn(async () => fakeOutput);
    const pendingRewardMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        pendingReward: pendingRewardMock,
      },
    } as unknown as MiaVault;

    const response = await getMiaVaultPendingReward({
      miaVaultContract: fakeContract,
      rewardTokenAddress: miaTokenAddress,
      accountAddress: fakeAccountAddress,
      poolIndex: fakePid,
    });

    expect(callMock).toHaveBeenCalledTimes(1);
    expect(pendingRewardMock).toHaveBeenCalledTimes(1);
    expect(pendingRewardMock).toHaveBeenCalledWith(miaTokenAddress, fakePid, fakeAccountAddress);
    expect(response).toEqual({
      pendingMiaReward: new BigNumber(fakeOutput),
    });
  });
});
