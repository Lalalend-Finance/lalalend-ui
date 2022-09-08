import { MiaVault } from 'types/contracts';

import getMiaVaultTotalAllocationPoints from '.';

const fakeTokenAddress = '0x0';

describe('api/queries/getMiaVaultTotalAllocationPoints', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        totalAllocPoints: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as MiaVault;

    try {
      await getMiaVaultTotalAllocationPoints({
        miaVaultContract: fakeContract,
        tokenAddress: fakeTokenAddress,
      });

      throw new Error('getMiaVaultTotalAllocationPoints should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the total allocation points on success', async () => {
    const fakeOutput = '100';

    const callMock = jest.fn(async () => fakeOutput);
    const totalAllocPointsMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        totalAllocPoints: totalAllocPointsMock,
      },
    } as unknown as MiaVault;

    const response = await getMiaVaultTotalAllocationPoints({
      miaVaultContract: fakeContract,
      tokenAddress: fakeTokenAddress,
    });

    expect(callMock).toHaveBeenCalledTimes(1);
    expect(totalAllocPointsMock).toHaveBeenCalledTimes(1);
    expect(totalAllocPointsMock).toHaveBeenCalledWith(fakeTokenAddress);
    expect(response).toEqual({
      totalAllocationPoints: +fakeOutput,
    });
  });
});
