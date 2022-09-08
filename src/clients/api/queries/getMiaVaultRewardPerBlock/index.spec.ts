import BigNumber from 'bignumber.js';

import { TOKENS_EVMOS } from 'constants/tokens';
import { MiaVault } from 'types/contracts';

import getMiaVaultRewardPerBlock from '.';

const miaTokenAddress = TOKENS_EVMOS.mia.address;

describe('api/queries/getMiaVaultRewardPerBlock', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        rewardTokenAmountsPerBlock: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as MiaVault;

    try {
      await getMiaVaultRewardPerBlock({
        miaVaultContract: fakeContract,
        tokenAddress: miaTokenAddress,
      });

      throw new Error('getMiaVaultRewardPerBlock should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the reward per block in wei on success', async () => {
    const fakeOutput = '2000000000000000000';

    const callMock = jest.fn(async () => fakeOutput);
    const rewardTokenAmountsPerBlockMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        rewardTokenAmountsPerBlock: rewardTokenAmountsPerBlockMock,
      },
    } as unknown as MiaVault;

    const response = await getMiaVaultRewardPerBlock({
      miaVaultContract: fakeContract,
      tokenAddress: miaTokenAddress,
    });

    expect(callMock).toHaveBeenCalledTimes(1);
    expect(rewardTokenAmountsPerBlockMock).toHaveBeenCalledTimes(1);
    expect(rewardTokenAmountsPerBlockMock).toHaveBeenCalledWith(miaTokenAddress);
    expect(response).toEqual({
      rewardPerBlockWei: new BigNumber(fakeOutput),
    });
  });
});
