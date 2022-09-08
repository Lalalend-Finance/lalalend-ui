import fakeAddress from '__mocks__/models/address';
import { MiaVault } from 'types/contracts';

import setVoteDelegate from '.';

describe('api/mutation/setVoteDelegate', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        delegate: () => ({
          send: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as MiaVault;

    try {
      await setVoteDelegate({
        miaVaultContract: fakeContract,
        delegateAddress: fakeAddress,
        accountAddress: fakeAddress,
      });

      throw new Error('setVoteDelegate should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns Receipt when request succeeds', async () => {
    const fakeTransactionReceipt = { events: {} };
    const sendMock = jest.fn(async () => fakeTransactionReceipt);
    const delegateMock = jest.fn(() => ({
      send: sendMock,
    }));
    const fakeContract = {
      methods: {
        delegate: delegateMock,
      },
    } as unknown as MiaVault;

    const response = await setVoteDelegate({
      miaVaultContract: fakeContract,
      delegateAddress: fakeAddress,
      accountAddress: fakeAddress,
    });

    expect(response).toBe(fakeTransactionReceipt);
    expect(sendMock).toHaveBeenCalledTimes(1);
    expect(delegateMock).toHaveBeenCalledWith(fakeAddress);
    expect(sendMock).toHaveBeenCalledWith({ from: fakeAddress });
  });
});
