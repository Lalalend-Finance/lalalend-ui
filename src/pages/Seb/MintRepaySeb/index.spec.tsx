import { fireEvent, waitFor } from '@testing-library/react';
import BigNumber from 'bignumber.js';
import React from 'react';

import fakeAccountAddress from '__mocks__/models/address';
import { assetData } from '__mocks__/models/asset';
import { useGetUserMarketInfo } from 'clients/api';
import renderComponent from 'testUtils/renderComponent';
import en from 'translation/translations/en.json';

import MintRepaySeb from '.';

jest.mock('clients/api');

const fakeSeb = { ...assetData, id: 'seb', symbol: 'VAI' };

describe('pages/Dashboard/MintRepaySeb', () => {
  beforeEach(() => {
    (useGetUserMarketInfo as jest.Mock).mockImplementation(() => ({
      data: {
        assets: [...assetData, fakeSeb],
        userTotalBorrowLimitCents: new BigNumber('111'),
        userTotalBorrowBalanceCents: new BigNumber('91'),
      },
      isLoading: false,
    }));
  });

  it('renders without crashing', async () => {
    const { getByText } = renderComponent(() => <MintRepaySeb />, {
      authContextValue: {
        account: {
          address: fakeAccountAddress,
        },
      },
    });
    await waitFor(() => getByText(en.mintRepaySeb.title));
  });

  it('renders mint tab by default and lets user switch to repay tab', async () => {
    const { getByText } = renderComponent(() => <MintRepaySeb />, {
      authContextValue: {
        account: {
          address: fakeAccountAddress,
        },
      },
    });

    // Check mint tab is display by default
    await waitFor(() => getByText(en.mintRepaySeb.mintSeb.enableToken));

    // Click on "Repay VAI" tab
    const repaySebTabButton = getByText(en.mintRepaySeb.tabRepay).closest(
      'button',
    ) as HTMLButtonElement;
    fireEvent.click(repaySebTabButton);

    // Check repay tab is now displaying
    await waitFor(() => getByText(en.mintRepaySeb.repaySeb.enableToken));
  });
});
