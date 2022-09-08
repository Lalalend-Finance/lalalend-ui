import fakeAddress from '__mocks__/models/address';
import { MiaLens } from 'types/contracts';

import getNTokenBalancesAll from '.';

describe('api/queries/getNTokenBalancesAll', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        vTokenBalancesAll: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as MiaLens;

    try {
      await getNTokenBalancesAll({
        miaLensContract: fakeContract,
        nTokenAddresses: [''],
        account: fakeAddress,
      });

      throw new Error('getNTokenBalancesAll should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the APY simulations in the correct format on success', async () => {
    const vTokenBalancesAllCallMock = jest.fn(async () => [
      {
        balanceOf: '10000',
        balanceOfUnderlying: '20000',
        borrowBalanceCurrent: '300',
        tokenAllowance: '40000000000000000',
        tokenBalance: '5000',
        vToken: fakeAddress,
      },
    ]);

    const fakeContract = {
      methods: {
        vTokenBalancesAll: () => ({
          call: vTokenBalancesAllCallMock,
        }),
      },
    } as unknown as MiaLens;

    const response = await getNTokenBalancesAll({
      miaLensContract: fakeContract,
      nTokenAddresses: [''],
      account: fakeAddress,
    });

    expect(vTokenBalancesAllCallMock).toHaveBeenCalledTimes(1);
    expect(response).toMatchSnapshot();
  });
});
