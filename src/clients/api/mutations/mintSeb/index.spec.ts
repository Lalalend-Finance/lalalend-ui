import BigNumber from 'bignumber.js';
import { NError } from 'errors';

import {
  SebControllerErrorReporterError,
  SebControllerErrorReporterFailureInfo,
} from 'constants/contracts/errorReporter';

import mintSeb from '.';

describe('api/mutation/mintSeb', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        mintVAI: () => ({
          send: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as any;

    try {
      await mintSeb({
        vaiControllerContract: fakeContract,
        amountWei: new BigNumber('10000000000000000'),
        fromAccountAddress: '0x3d759121234cd36F8124C21aFe1c6852d2bEd848',
      });

      throw new Error('mintSeb should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('throws a transaction error when Failure event is present', async () => {
    const fakeContract = {
      methods: {
        mintVAI: () => ({
          send: async () => ({
            events: {
              Failure: {
                returnValues: {
                  info: '2',
                  error: '2',
                },
              },
            },
          }),
        }),
      },
    } as any;

    try {
      await mintSeb({
        vaiControllerContract: fakeContract,
        amountWei: new BigNumber('10000000000000000'),
        fromAccountAddress: '0x3d759121234cd36F8124C21aFe1c6852d2bEd848',
      });

      throw new Error('mintSeb should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`[Error: ${SebControllerErrorReporterError[2]}]`);
      expect(error).toBeInstanceOf(NError);
      if (error instanceof NError) {
        expect(error.type).toBe('transaction');
        expect(error.data.error).toBe(SebControllerErrorReporterError[2]);
        expect(error.data.info).toBe(SebControllerErrorReporterFailureInfo[2]);
      }
    }
  });

  test('returns Receipt when request succeeds', async () => {
    const fakeAmountWei = new BigNumber('10000000000000000');
    const fakeFromAccountsAddress = '0x3d759121234cd36F8124C21aFe1c6852d2bEd848';
    const fakeTransactionReceipt = { events: {} };
    const sendMock = jest.fn(async () => fakeTransactionReceipt);
    const mintSebMock = jest.fn(() => ({
      send: sendMock,
    }));

    const fakeContract = {
      methods: {
        mintVAI: mintSebMock,
      },
    } as unknown as any;

    const response = await mintSeb({
      vaiControllerContract: fakeContract,
      amountWei: fakeAmountWei,
      fromAccountAddress: fakeFromAccountsAddress,
    });

    expect(response).toBe(fakeTransactionReceipt);
    expect(mintSebMock).toHaveBeenCalledTimes(1);
    expect(mintSebMock).toHaveBeenCalledWith(fakeAmountWei.toFixed());
    expect(sendMock).toHaveBeenCalledTimes(1);
    expect(sendMock).toHaveBeenCalledWith({ from: fakeFromAccountsAddress });
  });
});