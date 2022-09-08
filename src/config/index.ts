import { EvmosChainId } from 'types';

import { EVMOS_SCAN_URLS } from 'constants/bsc';
import { API_ENDPOINT_URLS, RPC_URLS } from 'constants/endpoints';

export interface Config {
  chainId: EvmosChainId;
  isOnTestnet: boolean;
  rpcUrl: string;
  apiUrl: string;
  evmosScanUrl: string;
  rpcUrlBnbTestnet?:string;
}

// TO CHANGE
const chainId: EvmosChainId = 9000 //process.env.REACT_APP_CHAIN_ID
  //? parseInt(process.env.REACT_APP_CHAIN_ID, 10)
  //: EvmosChainId.MAINNET;

const isOnTestnet = chainId === EvmosChainId.TESTNET;
const rpcUrl = RPC_URLS[chainId][0];
const apiUrl = API_ENDPOINT_URLS[chainId];
const evmosScanUrl = EVMOS_SCAN_URLS[chainId];
const rpcUrlBnbTestnet = "https://data-seed-prebsc-1-s1.binance.org:8545/";
const config: Config = {
  chainId,
  isOnTestnet,
  rpcUrl,
  apiUrl,
  evmosScanUrl,
  rpcUrlBnbTestnet
};

export default config;
