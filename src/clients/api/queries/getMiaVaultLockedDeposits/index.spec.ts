import miaVaultResponses from '__mocks__/contracts/miaVault';
import fakeAccountAddress from '__mocks__/models/address';
import { TOKENS_EVMOS } from 'constants/tokens';
import { MiaVault } from 'types/contracts';

import getMiaVaultLockedDeposits from '.';

const miaTokenAddress = TOKENS_EVMOS.mia.address;
const fakePid = 1;

describe('api/queries/getMiaVaultLockedDeposits', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        getWithdrawalRequests: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as MiaVault;

    try {
      await getMiaVaultLockedDeposits({
        miaVaultContract: fakeContract,
        rewardTokenAddress: miaTokenAddress,
        accountAddress: fakeAccountAddress,
        poolIndex: fakePid,
      });

      throw new Error('getMiaVaultLockedDeposits should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns withdrawal requests on success', async () => {
    const callMock = jest.fn(async () => miaVaultResponses.getWithdrawalRequests);
    const getWithdrawalRequestsMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        getWithdrawalRequests: getWithdrawalRequestsMock,
      },
    } as unknown as MiaVault;

    const response = await getMiaVaultLockedDeposits({
      miaVaultContract: fakeContract,
      rewardTokenAddress: miaTokenAddress,
      accountAddress: fakeAccountAddress,
      poolIndex: fakePid,
    });

    expect(callMock).toHaveBeenCalledTimes(1);
    expect(getWithdrawalRequestsMock).toHaveBeenCalledTimes(1);
    expect(getWithdrawalRequestsMock).toHaveBeenCalledWith(
      miaTokenAddress,
      fakePid,
      fakeAccountAddress,
    );
    expect(response).toMatchSnapshot();
  });
});
