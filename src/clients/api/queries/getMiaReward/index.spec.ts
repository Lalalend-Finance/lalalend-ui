import BigNumber from 'bignumber.js';

import fakeAddress from '__mocks__/models/address';
import { MiaLens } from 'types/contracts';

import getMiaReward from '.';

describe('api/queries/getMiaReward', () => {
  test('throws an error when one of MiaLens contract call fails', async () => {
    const lensContract = {
      methods: {
        pendingMia() {
          return {
            call() {
              throw new Error('Fake error message');
            },
          };
        },
      },
    };

    try {
      await getMiaReward({
        lensContract: lensContract as unknown as MiaLens,
        accountAddress: fakeAddress,
      });

      throw new Error('getMiaReward should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns correct MIA reward amount in wei', async () => {
    const fakeOutput = '73680428998277363810000000000';

    const lensContract = {
      methods: {
        pendingMia() {
          return {
            call() {
              return fakeOutput;
            },
          };
        },
      },
    };

    const res = await getMiaReward({
      lensContract: lensContract as unknown as MiaLens,
      accountAddress: fakeAddress,
    });

    expect(res).toEqual({
      miaRewardWei: new BigNumber(fakeOutput),
    });
  });
});
