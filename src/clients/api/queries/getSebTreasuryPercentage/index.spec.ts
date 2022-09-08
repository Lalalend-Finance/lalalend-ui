import BigNumber from 'bignumber.js';

import { SebUnitroller } from 'types/contracts';

import getSebTreasuryPercentage from '.';

describe('api/queries/getSebTreasuryPercentage', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        treasuryPercent: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as SebUnitroller;

    try {
      await getSebTreasuryPercentage({ vaiControllerContract: fakeContract });

      throw new Error('getSebTreasuryPercentage should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the VAI treasury percentage in the correct format', async () => {
    const callMock = jest.fn(async () => new BigNumber('1000000000000000'));
    const treasuryPercentMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        treasuryPercent: treasuryPercentMock,
      },
    } as unknown as SebUnitroller;

    const response = await getSebTreasuryPercentage({ vaiControllerContract: fakeContract });

    expect(treasuryPercentMock).toHaveBeenCalledTimes(1);
    expect(callMock).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      percentage: 0.1,
    });
  });
});
