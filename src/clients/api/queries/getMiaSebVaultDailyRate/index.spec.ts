import BigNumber from 'bignumber.js';

import { BLOCKS_PER_DAY } from 'constants/bsc';
import { Comptroller } from 'types/contracts';

import getMiaSebVaultDailyRate from '.';

describe('api/queries/getMiaSebVaultDailyRate', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        miaVAIVaultRate: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as Comptroller;

    try {
      await getMiaSebVaultDailyRate({
        comptrollerContract: fakeContract,
      });

      throw new Error('getMiaSebState should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the vault rate state on success', async () => {
    const fakeOutput = '1000';

    const callMock = jest.fn(async () => fakeOutput);
    const miaSebVaultRateMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        miaVAIVaultRate: miaSebVaultRateMock,
      },
    } as unknown as Comptroller;

    const response = await getMiaSebVaultDailyRate({
      comptrollerContract: fakeContract,
    });

    expect(miaSebVaultRateMock).toHaveBeenCalledTimes(1);
    expect(callMock).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      dailyRateWei: new BigNumber(fakeOutput).times(BLOCKS_PER_DAY),
    });
  });
});
