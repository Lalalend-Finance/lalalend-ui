import { useMemo } from 'react';
import { Vault } from 'types';

import useGetSebVault from './useGetSebVault';
import useGetVestingVaults from './useGetVestingVaults';

export interface UseGetVaultsOutput {
  isLoading: boolean;
  data: Vault[];
}

const useGetVaults = ({ accountAddress }: { accountAddress?: string }): UseGetVaultsOutput => {
  const { data: vestingVaults, isLoading: isGetVestingVaultsLoading } = useGetVestingVaults({
    accountAddress,
  });

  const { data: sebVault, isLoading: isSebVaultLoading } = useGetSebVault({
    accountAddress,
  });
/*
  const { data: vrtVault, isLoading: isVrtVaultLoading } = useGetVrtVault({
    accountAddress,
  });
*/
  const data: Vault[] = useMemo(() => {
    const allVaults = [...vestingVaults];

    if (sebVault) {
      allVaults.push(sebVault);
    }
/*
    if (vrtVault) {
      allVaults.push(vrtVault);
    }*/

    return allVaults;
  }, [JSON.stringify(vestingVaults), JSON.stringify(sebVault)/*, JSON.stringify(vrtVault)*/]);

  const isLoading = isGetVestingVaultsLoading || isSebVaultLoading; //|| isVrtVaultLoading;

  return {
    data,
    isLoading,
  };
};

export default useGetVaults;
