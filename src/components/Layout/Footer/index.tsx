/** @jsxImportSource @emotion/react */
import Typography from '@mui/material/Typography';
import config from 'config';
import React from 'react';
import { useTranslation } from 'translation';
import { BscChainId } from 'types';
import { generateEvmosScanUrl } from 'utilities';

import { useGetBlockNumber } from 'clients/api';
import { Icon } from 'components/Icon';
import tokenAddresses from 'constants/contracts/addresses/tokens.json';

import {
  VENUS_DISCORD_URL,
  VENUS_GITHUB_URL,
  VENUS_MEDIUM_URL,
  VENUS_TWITTER_URL,
} from './constants';
import { useStyles } from './styles';

export interface FooterUiProps {
  currentBlockNumber: number | undefined;
}

export const FooterUi: React.FC<FooterUiProps> = ({ currentBlockNumber }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div css={styles.container}>
      {!!currentBlockNumber && (
        <Typography
          component="a"
          variant="small2"
          css={styles.blockInfo}
          href={config.evmosScanUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t('footer.latestNumber')}
          <br css={styles.blockInfoMobileLineBreak} />
          <span css={styles.blockInfoNumber}>{currentBlockNumber}</span>
        </Typography>
      )}

      
    </div>
  );
};

const Footer: React.FC = () => {
  const { data: getBlockNumberData } = useGetBlockNumber();

  return <FooterUi currentBlockNumber={getBlockNumberData?.blockNumber} />;
};

export default Footer;
