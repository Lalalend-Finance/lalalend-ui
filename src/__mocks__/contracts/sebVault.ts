import { SebVault } from 'types/contracts_evmos';

const sebVaultResponses: {
  userInfo: Awaited<ReturnType<ReturnType<SebVault['methods']['userInfo']>['call']>>;
  pendingMIA: Awaited<ReturnType<ReturnType<SebVault['methods']['pendingMIA']>['call']>>;
} = {
  userInfo: {
    amount: '100000000000000000000000',
    rewardDebt: '2000',
    0: '100000000000000000000000',
    1: '4000',
  },
  pendingMIA: '600000000',
};

export default sebVaultResponses;
