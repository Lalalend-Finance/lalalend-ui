import { TOKENS_EVMOS } from 'constants/tokens';
import { MiaVault } from 'types/contracts';

import getMiaVaultPoolCount from '.';

const miaTokenAddress = TOKENS_EVMOS.mia.address;

describe('api/queries/getMiaVaultPoolCount', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        poolLength: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as MiaVault;

    try {
      await getMiaVaultPoolCount({
        miaVaultContract: fakeContract,
      });

      throw new Error('getMiaVaultPoolCount should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the MIA vault pool length on success', async () => {
    const fakeOutput = '10';

    const callMock = jest.fn(async () => fakeOutput);
    const poolLengthMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        poolLength: poolLengthMock,
      },
    } as unknown as MiaVault;

    const response = await getMiaVaultPoolCount({
      miaVaultContract: fakeContract,
    });

    expect(callMock).toHaveBeenCalledTimes(1);
    expect(poolLengthMock).toHaveBeenCalledTimes(1);
    expect(poolLengthMock).toHaveBeenCalledWith(miaTokenAddress);
    expect(response).toEqual({
      poolCount: +fakeOutput,
    });
  });
});
