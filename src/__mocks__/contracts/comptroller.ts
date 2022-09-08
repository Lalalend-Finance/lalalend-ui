import { Comptroller } from 'types/contracts_evmos';

const comptrollerResponses: {
  miaSEBVaultRate: Awaited<
    ReturnType<ReturnType<Comptroller['methods']['miaSEBVaultRate']>['call']>
  >;
  getHypotheticalAccountLiquidity: Awaited<
    ReturnType<ReturnType<Comptroller['methods']['getHypotheticalAccountLiquidity']>['call']>
  >;
} = {
  miaSEBVaultRate: '5000000000',
  getHypotheticalAccountLiquidity: {
    0: '100000000',
    1: '200000000',
    2: '300000000',
  },
};

export default comptrollerResponses;
