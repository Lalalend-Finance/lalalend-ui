import BigNumber from 'bignumber.js';
import { NError } from 'errors';

import fakeTransactionReceipt from '__mocks__/models/transactionReceipt';
import {
  SebVaultErrorReporterError,
  SebVaultErrorReporterInfo,
} from 'constants/contracts/errorReporter';
import { SebVault } from 'types/contracts';

import stakeInSebVault from '.';

const fakeAmountWei = new BigNumber('1000000000000');
const fakeFromAccountsAddress = '0x3d759121234cd36F8124C21aFe1c6852d2bEd848';

describe('api/mutation/stakeInSebVault', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        deposit: () => ({
          send: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as SebVault;

    try {
      await stakeInSebVault({
        vaiVaultContract: fakeContract,
        fromAccountAddress: fakeFromAccountsAddress,
        amountWei: fakeAmountWei,
      });

      throw new Error('stakeInSebVault should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('throws a transaction error when failure event is present', async () => {
    const fakeContract = {
      methods: {
        deposit: () => ({
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
    } as unknown as SebVault;

    try {
      await stakeInSebVault({
        vaiVaultContract: fakeContract,
        fromAccountAddress: fakeFromAccountsAddress,
        amountWei: fakeAmountWei,
      });

      throw new Error('stakeInSebVault should have thrown an error but did not');
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
    const depositMock = jest.fn(() => ({
      send: sendMock,
    }));

    const fakeContract = {
      methods: {
        deposit: depositMock,
      },
    } as unknown as SebVault;

    const response = await stakeInSebVault({
      vaiVaultContract: fakeContract,
      fromAccountAddress: fakeFromAccountsAddress,
      amountWei: fakeAmountWei,
    });

    expect(response).toBe(fakeTransactionReceipt);
    expect(depositMock).toHaveBeenCalledTimes(1);
    expect(depositMock).toHaveBeenCalledWith(fakeAmountWei.toFixed());
    expect(sendMock).toHaveBeenCalledTimes(1);
    expect(sendMock).toHaveBeenCalledWith({ from: fakeFromAccountsAddress });
  });
});
