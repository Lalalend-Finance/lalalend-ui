/** @jsxImportSource @emotion/react */
import { Paper } from '@mui/material';
import BigNumber from 'bignumber.js';
import { Delimiter, TableProps, switchAriaLabel, toast } from 'components';
import { NError, formatNErrorToReadableString } from 'errors';
import React, { useContext, useState } from 'react';
import { Asset, NTokenId } from 'types';

import {
  getHypotheticalAccountLiquidity,
  getNTokenBalanceOf,
  useEnterMarkets,
  useExitMarket,
} from 'clients/api';
import { getNTokenContract, useComptrollerContract } from 'clients/contracts';
import { useWeb3 } from 'clients/web3';
import { TOKENS_EVMOS } from 'constants/tokens';

import { SupplyWithdrawModal } from '../../Modals';
import { useStyles } from '../styles';
import { CollateralConfirmModal } from './CollateralConfirmModal';
import SuppliedTable from './SuppliedTable';
import SupplyMarketTable from './SupplyMarketTable';

interface SupplyMarketProps {
  className?: string;
  isMiaEnabled: boolean;
  suppliedAssets: Asset[];
  supplyMarketAssets: Asset[];
  toggleAssetCollateral: (a: Asset) => Promise<void>;
  confirmCollateral: Asset | undefined;
  setConfirmCollateral: (asset: Asset | undefined) => void;
}

export const SupplyMarketUi: React.FC<SupplyMarketProps> = ({
  className,
  isMiaEnabled,
  supplyMarketAssets,
  suppliedAssets,
  toggleAssetCollateral,
  confirmCollateral,
  setConfirmCollateral,
}) => {
  const [selectedAssetId, setSelectedAssetId] = React.useState<Asset['id'] | undefined>(undefined);
  const styles = useStyles();

  const collateralOnChange = async (asset: Asset) => {
    try {
      await toggleAssetCollateral(asset);
    } catch (e) {
      if (e instanceof NError) {
        toast.error({
          message: formatNErrorToReadableString(e),
        });
      }
    }
  };

  const rowOnClick = (e: React.MouseEvent<HTMLElement>, row: TableProps['data'][number]) => {
    const assetId = row[0].value as NTokenId;

    if ((e.target as HTMLElement).ariaLabel !== switchAriaLabel) {
      setSelectedAssetId(assetId);
      console.log(assetId);
    }
  };

  const selectedAsset = React.useMemo(
    () =>
      [...supplyMarketAssets, ...suppliedAssets].find(
        marketAsset => marketAsset.id === selectedAssetId,
      ),
    [selectedAssetId, JSON.stringify(supplyMarketAssets), JSON.stringify(suppliedAssets)],
  );

  return (
    <Paper className={className} css={styles.tableContainer}>
      {suppliedAssets.length > 0 && (
        <>
          <SuppliedTable
            isMiaEnabled={isMiaEnabled}
            assets={suppliedAssets}
            rowOnClick={rowOnClick}
            collateralOnChange={collateralOnChange}
          />
          <Delimiter css={styles.delimiter} />
        </>
      )}
      <SupplyMarketTable
        isMiaEnabled={isMiaEnabled}
        assets={supplyMarketAssets}
        rowOnClick={rowOnClick}
        collateralOnChange={collateralOnChange}
      />
      <CollateralConfirmModal
        asset={confirmCollateral}
        handleClose={() => setConfirmCollateral(undefined)}
      />
      {selectedAsset && (
        <SupplyWithdrawModal
          asset={selectedAsset}
          assets={[...suppliedAssets, ...supplyMarketAssets]}
          isMiaEnabled={isMiaEnabled}
          onClose={() => setSelectedAssetId(undefined)}
        />
      )}
    </Paper>
  );
};

const SupplyMarket: React.FC<
  Pick<SupplyMarketProps, 'isMiaEnabled' | 'supplyMarketAssets' | 'suppliedAssets'> & {
    className?: string;
    accountAddress: string; 
  }
> = ({ className, isMiaEnabled, supplyMarketAssets, suppliedAssets, accountAddress }) => {
  const web3 = useWeb3();
  const comptrollerContract = useComptrollerContract();

  const [confirmCollateral, setConfirmCollateral] = useState<Asset | undefined>(undefined);


  const { mutateAsync: enterMarkets } = useEnterMarkets({
    onSettled: () => setConfirmCollateral(undefined),
  });

  const { mutateAsync: exitMarket } = useExitMarket({
    onSettled: () => setConfirmCollateral(undefined),
  });

  const toggleAssetCollateral = async (asset: Asset) => {

    if (!accountAddress) {
      throw new NError({
        type: 'interaction',
        code: 'accountError',
      });
    }

    if (!asset || !asset.borrowBalance.isZero()) {
      throw new NError({
        type: 'interaction',
        code: 'collateralRequired',
      });
    }

    if (asset.collateral) {
      const nTokenContract = getNTokenContract(asset.id as NTokenId, web3);

      let assetHypotheticalLiquidity;
      try {
        const nTokenBalanceOf = await getNTokenBalanceOf({
          nTokenContract,
          accountAddress,
        });

        assetHypotheticalLiquidity = await getHypotheticalAccountLiquidity({
          comptrollerContract,
          accountAddress,
          nTokenAddress: asset.ntokenAddress,
          nTokenBalanceOfWei: new BigNumber(nTokenBalanceOf.balanceWei),
        });
      } catch (error) {
        if (error instanceof NError) {
          throw error;
        }

        throw new NError({
          type: 'interaction',
          code: 'collateralDisableError',
          data: { assetName: asset.symbol },
        });
      }

      if (+assetHypotheticalLiquidity['1'] > 0 || +assetHypotheticalLiquidity['2'] === 0) {
        try {
          setConfirmCollateral(asset);
          await exitMarket({ ntokenAddress: asset.ntokenAddress, accountAddress });
        } catch (error) {
          if (error instanceof NError) {
            throw error;
          }

          throw new NError({
            type: 'interaction',
            code: 'collateralDisableError',
            data: {
              assetName: asset.symbol,
            },
          });
        }
      }

      return;
    }

    try {
      setConfirmCollateral(asset);
      await enterMarkets({ nTokenAddresses: [asset.ntokenAddress], accountAddress });
    } catch (error) {
      if (error instanceof NError) {
        throw error;
      }
      throw new NError({
        type: 'interaction',
        code: 'collateralEnableError',
        data: {
          assetName: asset.symbol,
        },
      });
    }

    throw new NError({
      type: 'interaction',
      code: 'collateralRequired',
    });
  };

  return (
    <SupplyMarketUi
      className={className}
      suppliedAssets={suppliedAssets}
      supplyMarketAssets={supplyMarketAssets}
      isMiaEnabled={isMiaEnabled}
      toggleAssetCollateral={toggleAssetCollateral}
      confirmCollateral={confirmCollateral}
      setConfirmCollateral={setConfirmCollateral}
    />
  );
};

export default SupplyMarket;
