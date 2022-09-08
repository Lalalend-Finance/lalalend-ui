import BigNumber from 'bignumber.js';

import vaiUnitrollerResponses from '__mocks__/contracts/sebUnitroller';
import fakeAddress from '__mocks__/models/address';
import { SebUnitroller } from 'types/contracts';

import getMintableSeb from '.';

describe('api/queries/getMintableSeb', () => {
  test('throws an error when request fails', async () => {
    const fakeContract = {
      methods: {
        getMintableVAI: () => ({
          call: async () => {
            throw new Error('Fake error message');
          },
        }),
      },
    } as unknown as SebUnitroller;

    try {
      await getMintableSeb({
        vaiControllerContract: fakeContract,
        accountAddress: fakeAddress,
      });

      throw new Error('getMintableSeb should have thrown an error but did not');
    } catch (error) {
      expect(error).toMatchInlineSnapshot('[Error: Fake error message]');
    }
  });

  test('returns the mintable VAI in the correct format on success', async () => {
    const callMock = jest.fn(async () => vaiUnitrollerResponses.getMintableVAI);
    const getMintableVAIMock = jest.fn(() => ({
      call: callMock,
    }));

    const fakeContract = {
      methods: {
        getMintableVAI: getMintableVAIMock,
      },
    } as unknown as SebUnitroller;

    const response = await getMintableSeb({
      vaiControllerContract: fakeContract,
      accountAddress: fakeAddress,
    });

    expect(callMock).toHaveBeenCalledTimes(1);
    expect(getMintableVAIMock).toHaveBeenCalledTimes(1);
    expect(response).toMatchSnapshot();
    expect(response.mintableSebWei instanceof BigNumber).toBeTruthy();
  });
});
