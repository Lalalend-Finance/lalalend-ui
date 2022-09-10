import { EvmosChainId } from 'types';

export const API_ENDPOINT_URLS = { 
  [EvmosChainId.MAINNET]: 'https://api.mia.io/api',
  [EvmosChainId.TESTNET]: 'http://localhost:3001' // todo 'https://testnetapi.mia.io/api',
};

export const RPC_URLS: {
  [key: string]: string[];
} = {
  [EvmosChainId.MAINNET]:['https://eth.bd.evmos.org:8545'],
  [EvmosChainId.TESTNET]: ['https://eth.bd.evmos.dev:8545'],
};
