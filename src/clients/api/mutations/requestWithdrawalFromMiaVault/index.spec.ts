import BigNumber from 'bignumber.js';
import { NError } from 'errors';

import fakeTransactionReceipt from '__mocks__/models/transactionReceipt';
import {
  SebVaultErrorReporterError,
  SebVaultErrorReporterInfo,
} from 'constants/contracts/errorReporter';
import { MiaVault } from 'types/contracts';

import requestWithdrawalFromMiaVault from '.';

const fakeAmountWei = new BigNumber('1000000000000');
const fakeFromAccountsAddress = '0x3d759121234cd36F8124C21aFe1c6852d2bEd848';
const fakeRewardTokenAddress = '0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47';
const fakePoolIndex = 4;

describe('api/mutation/requestWithdrawalFromMiaVault', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        requestWithdrawal: () => ({
          send: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as MiaVault;

    try {
      await requestWithdrawalFromMiaVault({
        miaVaultContract: fakeContract,
        fromAccountAddress: fakeFromAccountsAddress,
        rewardTokenAddress: fakeRewardTokenAddress,
        amountWei: fakeAmountWei,
        poolIndex: fakePoolIndex,
      });

      throw new Error('requestWithdrawalFromMiaVault should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('throws a transaction error when failure event is present', async () => {
    const fakeContract = {
      methods: {
        requestWithdrawal: () => ({
          send: async () => ({
            events: {
              Failure: {
                returnValues: {
                  info: '1',
                  error: '1',
                },
              },
            },
          }),
        }),
      },
    } as unknown as MiaVault;

    try {
      await requestWithdrawalFromMiaVault({
        miaVaultContract: fakeContract,
        fromAccountAddress: fakeFromAccountsAddress,
        rewardTokenAddress: fakeRewardTokenAddress,
        amountWei: fakeAmountWei,
        poolIndex: fakePoolIndex,
      });

      throw new Error('requestWithdrawalFromMiaVault should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`[Error: ${SebVaultErrorReporterError[1]}]`);
      expect(error).toBeInstanceOf(NError);
      if (error instanceof NError) {
        expect(error.type).toBe('transaction');
        expect(error.data.error).toBe(SebVaultErrorReporterError[1]);
        expect(error.data.info).toBe(SebVaultErrorReporterInfo[1]);
      }
    }
  });

  test('returns receipt when request succeeds', async () => {
    const sendMock = jest.fn(async () => fakeTransactionReceipt);
    const requestWithdrawalMock = jest.fn(() => ({
      send: sendMock,
    }));

    const fakeContract = {
      methods: {
        requestWithdrawal: requestWithdrawalMock,
      },
    } as unknown as MiaVault;

    const response = await requestWithdrawalFromMiaVault({
      miaVaultContract: fakeContract,
      fromAccountAddress: fakeFromAccountsAddress,
      rewardTokenAddress: fakeRewardTokenAddress,
      amountWei: fakeAmountWei,
      poolIndex: fakePoolIndex,
    });

    expect(response).toBe(fakeTransactionReceipt);
    expect(requestWithdrawalMock).toHaveBeenCalledTimes(1);
    expect(requestWithdrawalMock).toHaveBeenCalledWith(
      fakeRewardTokenAddress,
      fakePoolIndex,
      fakeAmountWei.toFixed(),
    );
    expect(sendMock).toHaveBeenCalledTimes(1);
    expect(sendMock).toHaveBeenCalledWith({ from: fakeFromAccountsAddress });
  });
});