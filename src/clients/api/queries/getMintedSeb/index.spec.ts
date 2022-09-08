import BigNumber from 'bignumber.js';

import address from '__mocks__/models/address';
import { Comptroller } from 'types/contracts';

import getMintedSeb from '.';

describe('api/queries/getMintedSeb', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        mintedVAIs: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as Comptroller;

    try {
      await getMintedSeb({
        comptrollerContract: fakeContract,
        accountAddress: address,
      });

      throw new Error('getMintedSeb should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the MIA amount accrued in the correct format', async () => {
    const fakeMintedSeb = '1000000000000000000000000000';
    const callMock = jest.fn(async () => fakeMintedSeb);
    const mintedVAIsMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        mintedVAIs: mintedVAIsMock,
      },
    } as unknown as Comptroller;

    const response = await getMintedSeb({
      comptrollerContract: fakeContract,
      accountAddress: address,
    });

    expect(mintedVAIsMock).toHaveBeenCalledTimes(1);
    expect(callMock).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      mintedSebWei: new BigNumber(fakeMintedSeb),
    });
  });
});
