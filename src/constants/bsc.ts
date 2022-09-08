import { BscChainId,EvmosChainId } from 'types';

export const BLOCK_TIME_MS = 1700;
// 25 blocks a minute, 60 minutes an hour, 24 hours a day
export const BLOCKS_PER_DAY = 25 * 60 * 24;
 
export const BSC_SCAN_URLS = {
  [BscChainId.MAINNET]: 'https://bscscan.com',
  [BscChainId.TESTNET]: 'https://testnet.bscscan.com',
};

export const EVMOS_SCAN_URLS = {
  [EvmosChainId.MAINNET]: 'https://evm.evmos.org/',
  [EvmosChainId.TESTNET]: 'https://evm.evmos.dev/',
};