import { waitFor } from '@testing-library/react';
import BigNumber from 'bignumber.js';
import React from 'react';

import compTrollerResponses from '__mocks__/contracts/comptroller';
import vaiVaultResponses from '__mocks__/contracts/sebVault';
import vrtVaultResponses from '__mocks__/contracts/vrtVault';
import miaVaultResponses from '__mocks__/contracts/miaVault';
import fakeAddress from '__mocks__/models/address';
import { markets } from '__mocks__/models/markets';
import {
  getBalanceOf,
  getMarkets,
  getSebVaultPendingMia,
  getSebVaultUserInfo,
  getMiaSebVaultDailyRate,
  getVrtVaultAccruedInterest,
  getVrtVaultInterestRatePerBlock,
  getVrtVaultUserInfo,
  getMiaVaultPendingReward,
  getMiaVaultPoolCount,
  getMiaVaultPoolInfo,
  getMiaVaultRewardPerBlock,
  getMiaVaultTotalAllocationPoints,
  getMiaVaultUserInfo,
} from 'clients/api';
import formatToSebVaultUserInfo from 'clients/api/queries/getSebVaultUserInfo/formatToUserInfo';
import formatToVrtVaultUserInfo from 'clients/api/queries/getVrtVaultUserInfo/formatToUserInfo';
import formatToPoolInfo from 'clients/api/queries/getMiaVaultPoolInfo/formatToPoolInfo';
import formatToMiaVaultUserInfo from 'clients/api/queries/getMiaVaultUserInfo/formatToUserInfo';
import renderComponent from 'testUtils/renderComponent';

import useGetVaults, { UseGetVaultsOutput } from '.';

jest.mock('clients/api');

describe('api/queries/useGetVaults', () => {
  beforeEach(() => {
    (getMiaVaultPoolCount as jest.Mock).mockImplementation(() => ({
      poolCount: miaVaultResponses.poolLength,
    }));
    (getMiaVaultTotalAllocationPoints as jest.Mock).mockImplementation(() => ({
      totalAllocationPoints: miaVaultResponses.totalAllocPoints,
    }));
    (getMiaVaultRewardPerBlock as jest.Mock).mockImplementation(() => ({
      rewardPerBlockWei: new BigNumber(miaVaultResponses.rewardTokenAmountsPerBlock),
    }));
    (getMiaVaultPendingReward as jest.Mock).mockImplementation(() => ({
      pendingMiaReward: new BigNumber(miaVaultResponses.pendingReward),
    }));
    (getSebVaultPendingMia as jest.Mock).mockImplementation(() => ({
      pendingMiaWei: new BigNumber(vaiVaultResponses.pendingMIA),
    }));
    (getMiaSebVaultDailyRate as jest.Mock).mockImplementation(() => ({
      dailyRateWei: new BigNumber(compTrollerResponses.miaVAIVaultRate),
    }));
    (getVrtVaultAccruedInterest as jest.Mock).mockImplementation(() => ({
      accruedInterestWei: new BigNumber(vrtVaultResponses.getAccruedInterest),
    }));
    (getVrtVaultInterestRatePerBlock as jest.Mock).mockImplementation(() => ({
      interestRatePerBlockWei: new BigNumber(vrtVaultResponses.interestRatePerBlock),
    }));
    (getBalanceOf as jest.Mock).mockImplementation(() => ({
      balanceWei: new BigNumber('4000000000'),
    }));
    (getMarkets as jest.Mock).mockImplementation(() => ({ markets }));

    (getSebVaultUserInfo as jest.Mock).mockImplementation(() =>
      formatToSebVaultUserInfo(vaiVaultResponses.userInfo),
    );

    (getMiaVaultPoolInfo as jest.Mock).mockImplementation(() =>
      formatToPoolInfo(miaVaultResponses.poolInfo),
    );

    (getMiaVaultUserInfo as jest.Mock).mockImplementation(() =>
      formatToMiaVaultUserInfo(miaVaultResponses.userInfo),
    );

    (getVrtVaultUserInfo as jest.Mock).mockImplementation(() =>
      formatToVrtVaultUserInfo(vrtVaultResponses.userInfo),
    );
  });

  it('fetches and returns vaults correctly', async () => {
    let data: UseGetVaultsOutput['data'] | undefined;
    let isLoading = false;

    const GetVaultsWrapper = () => {
      ({ data, isLoading } = useGetVaults({ accountAddress: fakeAddress }));
      return <div />;
    };

    renderComponent(<GetVaultsWrapper />, {
      authContextValue: { account: { address: fakeAddress } },
    });

    await waitFor(() => expect(!isLoading && data && data.length > 0).toBe(true));
    expect(data).toMatchSnapshot();
  });
});
