import { BscConnector } from '@binance-chain/bsc-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import config from 'config';
import { BscChainId } from 'types';

import { Connector } from './types';

export const injectedConnector = new InjectedConnector({ supportedChainIds: [config.chainId] });


const binanceChainWalletConnector = new BscConnector({ supportedChainIds: [config.chainId] });

export const connectorsByName = {
  [Connector.MetaMask]: injectedConnector
};
