import BigNumber from 'bignumber.js';

import miaVaultResponses from '__mocks__/contracts/miaVault';
import { MiaVault } from 'types/contracts';

import getMiaVaultPoolInfo from '.';

const fakeTokenAddress = '0x0';
const fakePid = 0;

describe('api/queries/getMiaVaultPoolInfo', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        poolInfos: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as MiaVault;

    try {
      await getMiaVaultPoolInfo({
        miaVaultContract: fakeContract,
        rewardTokenAddress: fakeTokenAddress,
        poolIndex: fakePid,
      });

      throw new Error('getMiaVaultPoolInfo should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the pool infos on success', async () => {
    const callMock = jest.fn(async () => miaVaultResponses.poolInfo);
    const poolInfosMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        poolInfos: poolInfosMock,
      },
    } as unknown as MiaVault;

    const response = await getMiaVaultPoolInfo({
      miaVaultContract: fakeContract,
      rewardTokenAddress: fakeTokenAddress,
      poolIndex: fakePid,
    });

    expect(callMock).toHaveBeenCalledTimes(1);
    expect(poolInfosMock).toHaveBeenCalledTimes(1);
    expect(poolInfosMock).toHaveBeenCalledWith(fakeTokenAddress, fakePid);
    expect(response).toMatchSnapshot();
    expect(response.accRewardPerShare instanceof BigNumber).toBeTruthy();
  });
});
