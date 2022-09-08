import BigNumber from 'bignumber.js';

import vaiVaultResponses from '__mocks__/contracts/sebVault';
import fakeAddress from '__mocks__/models/address';
import { SebVault } from 'types/contracts';

import getSebVaultUserInfo from '.';

describe('api/queries/getSebVaultUserInfo', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        userInfo: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as SebVault;

    try {
      await getSebVaultUserInfo({
        vaiVaultContract: fakeContract,
        accountAddress: fakeAddress,
      });

      throw new Error('getSebVaultUserInfo should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the user info in the correct format', async () => {
    const callMock = jest.fn(async () => vaiVaultResponses.userInfo);
    const userInfoMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        userInfo: userInfoMock,
      },
    } as unknown as SebVault;

    const response = await getSebVaultUserInfo({
      vaiVaultContract: fakeContract,
      accountAddress: fakeAddress,
    });

    expect(callMock).toHaveBeenCalledTimes(1);
    expect(userInfoMock).toHaveBeenCalledTimes(1);
    expect(response).toMatchSnapshot();
    expect(response.stakedSebWei instanceof BigNumber).toBeTruthy();
  });
});
