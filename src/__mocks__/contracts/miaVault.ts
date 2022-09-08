import { MiaVault } from 'types/contracts_evmos';

const miaVaultResponses: {
  userInfo: Awaited<ReturnType<ReturnType<MiaVault['methods']['getUserInfo']>['call']>>;
  poolInfo: Awaited<ReturnType<ReturnType<MiaVault['methods']['poolInfos']>['call']>>;
  poolLength: Awaited<ReturnType<ReturnType<MiaVault['methods']['poolLength']>['call']>>;
  totalAllocPoints: Awaited<
    ReturnType<ReturnType<MiaVault['methods']['totalAllocPoints']>['call']>
  >;
  rewardTokenAmountsPerBlock: Awaited<
    ReturnType<ReturnType<MiaVault['methods']['rewardTokenAmountsPerBlock']>['call']>
  >;
  pendingReward: Awaited<ReturnType<ReturnType<MiaVault['methods']['pendingReward']>['call']>>;
  getWithdrawalRequests: Awaited<
    ReturnType<ReturnType<MiaVault['methods']['getWithdrawalRequests']>['call']>
  >;
} = {
  userInfo: {
    pendingWithdrawals: '1000000000000000000',
    rewardDebt: '2000000000000000000',
    amount: '30000000000000000000',
    0: '1000000000000000000',
    1: '2000000000000000000',
    2: '30000000000000000000',
  },
  poolInfo: {
    token: '0x4B7268FC7C727B88c5Fc127D41b491BfAe63e144',
    allocPoint: '10',
    lastRewardBlock: '100000',
    accRewardPerShare: '123871680',
    lockPeriod: '200',
    0: '0x4B7268FC7C727B88c5Fc127D41b491BfAe63e144',
    1: '10',
    2: '100000',
    3: '123871680',
    4: '200',
  },
  poolLength: '5',
  totalAllocPoints: '100',
  rewardTokenAmountsPerBlock: '10000000',
  pendingReward: '200000000',
  getWithdrawalRequests: [
    ['1000000000000000000', '1656499404'],
    ['2000000000000000000', '1656599404'],
    ['3000000000000000000', '1656699404'],
  ],
};

export default miaVaultResponses;
