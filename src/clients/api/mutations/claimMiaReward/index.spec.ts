import { NError } from 'errors';

import address from '__mocks__/models/address';
import fakeTransactionReceipt from '__mocks__/models/transactionReceipt';
import {
  ComptrollerErrorReporterError,
  ComptrollerErrorReporterFailureInfo,
} from 'constants/contracts/errorReporter';
import { NTOKENS_EVMOS } from 'constants/tokens';
import { Comptroller } from 'types/contracts';

import claimMiaReward from '.';
import getNTokenBalancesAll from '../../queries/getNTokenBalancesAll';

jest.mock('../../queries/getNTokenBalancesAll');

describe('api/mutation/claimMiaReward', () => {
  test('throws an error when request fails', async () => {
    (getNTokenBalancesAll as jest.Mock).mockImplementationOnce(async () => ({ balances: [] }));

    const fakeContract = {
      methods: {
        'claimMia(address,address[])': () => ({
          send: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as Comptroller;

    try {
      await claimMiaReward({
        comptrollerContract: fakeContract,
        fromAccountAddress: address,
      });

      throw new Error('claimMiaReward should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('throws a transaction error when Failure event is present', async () => {
    (getNTokenBalancesAll as jest.Mock).mockImplementationOnce(async () => ({
      balances: [
        {
          balanceOf: '0',
          balanceOfUnderlying: '0',
          borrowBalanceCurrent: '0',
          tokenAllowance: '0',
          tokenBalance: '0',
          vToken: NTOKENS_EVMOS.aave.address,
        },
        {
          balanceOf: '0',
          balanceOfUnderlying: '0',
          borrowBalanceCurrent: '20000000',
          tokenAllowance: '0',
          tokenBalance: '0',
          vToken: NTOKENS_EVMOS.btcb.address,
        },
        {
          balanceOf: '0',
          balanceOfUnderlying: '100000000',
          borrowBalanceCurrent: '0',
          tokenAllowance: '0',
          tokenBalance: '0',
          vToken: NTOKENS_EVMOS.wevmos.address,
        },
      ],
    }));

    const fakeContract = {
      methods: {
        'claimMia(address,address[])': () => ({
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
    } as unknown as Comptroller;

    try {
      await claimMiaReward({
        comptrollerContract: fakeContract,
        fromAccountAddress: address,
      });

      throw new Error('claimMiaReward should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`[Error: ${ComptrollerErrorReporterError[1]}]`);
      expect(error).toBeInstanceOf(NError);
      if (error instanceof VError) {
        expect(error.type).toBe('transaction');
        expect(error.data.error).toBe(ComptrollerErrorReporterError[1]);
        expect(error.data.info).toBe(ComptrollerErrorReporterFailureInfo[1]);
      }
    }
  });

  test('send claim request with correct arguments and returns transaction receipt when request succeeds', async () => {
    (getNTokenBalancesAll as jest.Mock).mockImplementationOnce(async () => ({
      balances: [
        {
          balanceOf: '0',
          balanceOfUnderlying: '0',
          borrowBalanceCurrent: '0',
          tokenAllowance: '0',
          tokenBalance: '0',
          vToken: NTOKENS_EVMOS.aave.address,
        },
        {
          balanceOf: '0',
          balanceOfUnderlying: '0',
          borrowBalanceCurrent: '20000000',
          tokenAllowance: '0',
          tokenBalance: '0',
          vToken: NTOKENS_EVMOS.btcb.address,
        },
        {
          balanceOf: '0',
          balanceOfUnderlying: '100000000',
          borrowBalanceCurrent: '0',
          tokenAllowance: '0',
          tokenBalance: '0',
          vToken: NTOKENS_EVMOS.wevmos.address,
        },
      ],
    }));

    const sendMock = jest.fn(async () => fakeTransactionReceipt);
    const claimMiaMock = jest.fn(() => ({
      send: sendMock,
    }));

    const fakeContract = {
      methods: {
        'claimMia(address,address[])': claimMiaMock,
      },
    } as unknown as Comptroller;

    const response = await claimMiaReward({
      comptrollerContract: fakeContract,
      fromAccountAddress: address,
    });

    expect(response).toBe(fakeTransactionReceipt);
    expect(claimMiaMock).toHaveBeenCalledTimes(1);

    // @TODO [VEN-198] Currently claiming all address until the pendingMia function is updated with pending rewards
    const expectedNTokenAddresses = Object.values(NTOKENS_EVMOS).map(vToken => vToken.address);
    expect(claimMiaMock).toHaveBeenCalledWith(address, expectedNTokenAddresses);
    expect(sendMock).toHaveBeenCalledTimes(1);
    expect(sendMock).toHaveBeenCalledWith({ from: address });
  });
});
