import BigNumber from 'bignumber.js';

import { MiaVesting } from 'types/contracts';

import getMiaWithdrawableAmount, { GetMiaWithdrawableAmountOutput } from '.';

const fakeAccountAddress = '0x000000000000000000000000000000000AcCoUnt';

describe('api/queries/getMiaBalance', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        getWithdrawableAmount: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as MiaVesting;

    try {
      await getMiaWithdrawableAmount({
        miaVestingContract: fakeContract,
        accountAddress: fakeAccountAddress,
      });

      throw new Error('getMiaBalanceOf should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the withdrawable amount on success', async () => {
    const fakeOutput: GetMiaWithdrawableAmountOutput = {
      totalWithdrawableAmount: new BigNumber('500000'),
      totalVestedAmount: new BigNumber('1000'),
      totalWithdrawnAmount: new BigNumber('0'),
    };

    const callMock = jest.fn(async () => fakeOutput);
    const miaWithdrawableAmountMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        getWithdrawableAmount: miaWithdrawableAmountMock,
      },
    } as unknown as MiaVesting;

    const response = await getMiaWithdrawableAmount({
      miaVestingContract: fakeContract,
      accountAddress: fakeAccountAddress,
    });

    expect(miaWithdrawableAmountMock).toHaveBeenCalledTimes(1);
    expect(callMock).toHaveBeenCalledTimes(1);
    expect(miaWithdrawableAmountMock).toHaveBeenCalledWith(fakeAccountAddress);
    expect(response).toStrictEqual(fakeOutput);
  });
});
