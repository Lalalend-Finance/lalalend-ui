import BigNumber from 'bignumber.js';

import fakeAddress from '__mocks__/models/address';
import { SebVault } from 'types/contracts';

import getSebVaultPendingMia from '.';

describe('api/queries/getSebVaultPendingMia', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        pendingMIA: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as SebVault;

    try {
      await getSebVaultPendingMia({
        vaiVaultContract: fakeContract,
        accountAddress: fakeAddress,
      });

      throw new Error('getSebVaultPendingMia should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the pending MIA value in the correct format', async () => {
    const fakePendingMiaWei = new BigNumber('1000000000000000000000000000');
    const callMock = jest.fn(async () => fakePendingMiaWei);
    const pendingMiaMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        pendingMIA: pendingMiaMock,
      },
    } as unknown as SebVault;

    const response = await getSebVaultPendingMia({
      vaiVaultContract: fakeContract,
      accountAddress: fakeAddress,
    });

    expect(callMock).toHaveBeenCalledTimes(1);
    expect(pendingMiaMock).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      pendingMiaWei: new BigNumber(fakePendingMiaWei),
    });
  });
});
