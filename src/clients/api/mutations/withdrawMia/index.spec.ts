import address from '__mocks__/models/address';
import fakeTransactionReceipt from '__mocks__/models/transactionReceipt';
import { MiaVesting } from 'types/contracts';

import withdrawMia from '.';
import getNTokenBalancesAll from '../../queries/getNTokenBalancesAll';

jest.mock('../../queries/getNTokenBalancesAll');

describe('api/mutation/withdrawMia', () => {
  test('throws an error when request fails', async () => {
    (getNTokenBalancesAll as jest.Mock).mockImplementationOnce(async () => ({ balances: [] }));

    const fakeContract = {
      methods: {
        withdraw: () => ({
          send: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as MiaVesting;

    try {
      await withdrawMia({
        miaVestingContract: fakeContract,
        accountAddress: address,
      });

      throw new Error('withdrawMia should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('send vrt conversion with correct arguments and returns transaction receipt when request succeeds', async () => {
    const sendMock = jest.fn(async () => fakeTransactionReceipt);
    const withdrawVrtMock = jest.fn(() => ({
      send: sendMock,
    }));

    const fakeContract = {
      methods: {
        withdraw: withdrawVrtMock,
      },
    } as unknown as MiaVesting;

    const response = await withdrawMia({
      miaVestingContract: fakeContract,
      accountAddress: address,
    });

    expect(response).toBe(fakeTransactionReceipt);
    expect(withdrawVrtMock).toHaveBeenCalledTimes(1);
    expect(withdrawVrtMock).toHaveBeenCalledWith();
    expect(sendMock).toHaveBeenCalledTimes(1);
    expect(sendMock).toHaveBeenCalledWith({ from: address });
  });
});
