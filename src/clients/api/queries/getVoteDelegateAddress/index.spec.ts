import fakeAddress from '__mocks__/models/address';
import { NULL_ADDRESS } from 'constants/address';
import { MiaVault } from 'types/contracts';

import getVoteDelegateAddress from '.';

describe('api/queries/getVoteDelegateAddress', () => {
  test('throws an error when an MiaVault contract call fails', async () => {
    const miaVaultContract = {
      methods: {
        delegates() {
          return {
            call() {
              throw new Error('Fake error message');
            },
          };
        },
      },
    };

    try {
      await getVoteDelegateAddress({
        miaVaultContract: miaVaultContract as unknown as MiaVault,
        accountAddress: fakeAddress,
      });

      throw new Error('getVoteDelegateAddress should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns undefined when address is null', async () => {
    const miaVaultContract = {
      methods: {
        delegates() {
          return {
            call() {
              return NULL_ADDRESS;
            },
          };
        },
      },
    };

    const res = await getVoteDelegateAddress({
      miaVaultContract: miaVaultContract as unknown as MiaVault,
      accountAddress: fakeAddress,
    });
    expect(res).toStrictEqual({
      delegateAddress: undefined,
    });
  });

  test('returns address when not null address is returned', async () => {
    const miaVaultContract = {
      methods: {
        delegates() {
          return {
            call() {
              return fakeAddress;
            },
          };
        },
      },
    };

    const res = await getVoteDelegateAddress({
      miaVaultContract: miaVaultContract as unknown as MiaVault,
      accountAddress: fakeAddress,
    });
    expect(res).toStrictEqual({
      delegateAddress: fakeAddress,
    });
  });
});
