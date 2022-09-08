import config from 'config';

import aave from 'assets/img/tokens/aave.png';
import ada from 'assets/img/tokens/ada.png';
import bch from 'assets/img/tokens/bch.png';
import beth from 'assets/img/tokens/beth.png';
import wevmos from 'assets/img/tokens/wevmos.png';
import btc from 'assets/img/tokens/btc.png';
import busd from 'assets/img/tokens/busd.png';
import cake from 'assets/img/tokens/cake.png';
import dai from 'assets/img/tokens/dai.png';
import doge from 'assets/img/tokens/doge.png';
import dot from 'assets/img/tokens/dot.png';
import eth from 'assets/img/tokens/eth.png';
import fil from 'assets/img/tokens/fil.png';
import link from 'assets/img/tokens/link.png';
import ltc from 'assets/img/tokens/ltc.png';
import luna from 'assets/img/tokens/luna.png';
import matic from 'assets/img/tokens/matic.png';
import sxp from 'assets/img/tokens/sxp.png';
import trx from 'assets/img/tokens/trx.png';
import tusd from 'assets/img/tokens/tusd.png';
import usdc from 'assets/img/tokens/usdc.png';
import usdt from 'assets/img/tokens/usdt.png';
import ust from 'assets/img/tokens/ust.png';
import vaave from 'assets/img/tokens/vaave.png';
import vada from 'assets/img/tokens/vada.png';
import seb from 'assets/img/tokens/nai.svg';
import vbch from 'assets/img/tokens/vbch.png';
import vbeth from 'assets/img/tokens/vbeth.png';
import vbnb from 'assets/img/tokens/vbnb.png';
import vbtc from 'assets/img/tokens/vbtc.png';
import vbusd from 'assets/img/tokens/vbusd.png';
import vcake from 'assets/img/tokens/vcake.png';
import vdai from 'assets/img/tokens/vdai.png';
import vdoge from 'assets/img/tokens/vdoge.png';
import vdot from 'assets/img/tokens/vdot.png';
import veth from 'assets/img/tokens/veth.png';
import vfil from 'assets/img/tokens/vfil.png';
import vlink from 'assets/img/tokens/vlink.png';
import vltc from 'assets/img/tokens/vltc.png';
import vluna from 'assets/img/tokens/vluna.png';
import vmatic from 'assets/img/tokens/vmatic.png';
import vrt from 'assets/img/tokens/vrt.svg';
import vsxp from 'assets/img/tokens/vsxp.png';
import vtrx from 'assets/img/tokens/vtrx.png';
import vtusd from 'assets/img/tokens/vtusd.png';
import vusdc from 'assets/img/tokens/vusdc.png';
import vusdt from 'assets/img/tokens/vusdt.png';
import vust from 'assets/img/tokens/vust.png';
import vxrp from 'assets/img/tokens/vxrp.png';
import vmia from 'assets/img/tokens/vmia.png';
import xrp from 'assets/img/tokens/xrp.png';
import mia from 'assets/img/tokens/mia.svg';
import frax from 'assets/img/tokens/frax.svg';

import TOKEN_ADDRESSES from './contracts/addresses/tokens.json';
import VBEP_TOKEN_ADDRESSES from './contracts/addresses/vBepTokens.json';

import EVMOS_TOKEN_ADDRESSES from './contracts/addresses/tokens_on_evmos.json';
import NERC20_TOKEN_ADDRESSES from './contracts/addresses/ntokens_on_evmos.json';

/*
export const TOKENS_EVMOS = config.isOnTestnet
  ? {
      sxp: {
        id: 'sxp',
        symbol: 'SXP',
        decimals: 18,
        address: TOKEN_ADDRESSES.sxp[97],
        asset: sxp,
        vasset: vsxp,
      },
      usdc: {
        id: 'usdc',
        symbol: 'USDC',
        decimals: 6,
        address: TOKEN_ADDRESSES.usdc[97],
        asset: usdc,
        vasset: vusdc,
      },
      usdt: {
        id: 'usdt',
        symbol: 'USDT',
        decimals: 6,
        address: TOKEN_ADDRESSES.usdt[97],
        asset: usdt,
        vasset: vusdt,
      },
      busd: {
        id: 'busd',
        symbol: 'BUSD',
        decimals: 18,
        address: TOKEN_ADDRESSES.busd[97],
        asset: busd,
        vasset: vbusd,
      },
      wevmos: {
        id: 'wevmos',
        symbol: 'BNB',
        decimals: 18,
        address: TOKEN_ADDRESSES.wevmos[97],
        asset: wevmos,
        vasset: vbnb,
      },
      mia: {
        id: 'mia',
        symbol: 'MIA',
        decimals: 18,
        address: TOKEN_ADDRESSES.mia[97],
        asset: mia,
        vasset: vmia,
      },
      btcb: {
        id: 'btcb',
        symbol: 'BTCB',
        decimals: 18,
        address: TOKEN_ADDRESSES.btcb[97],
        asset: btc,
        vasset: vbtc,
      },
      eth: {
        id: 'eth',
        symbol: 'ETH',
        decimals: 18,
        address: TOKEN_ADDRESSES.eth[97],
        asset: eth,
        vasset: veth,
      },
      ltc: {
        id: 'ltc',
        symbol: 'LTC',
        decimals: 18,
        address: TOKEN_ADDRESSES.ltc[97],
        asset: ltc,
        vasset: vltc,
      },
      xrp: {
        id: 'xrp',
        symbol: 'XRP',
        decimals: 18,
        address: TOKEN_ADDRESSES.xrp[97],
        asset: xrp,
        vasset: vxrp,
      },
      ada: {
        id: 'ada',
        symbol: 'ADA',
        decimals: 18,
        address: TOKEN_ADDRESSES.ada[97],
        asset: ada,
        vasset: vada,
      },
      doge: {
        id: 'doge',
        symbol: 'DOGE',
        decimals: 8,
        address: TOKEN_ADDRESSES.doge[97],
        asset: doge,
        vasset: vdoge,
      },
      matic: {
        id: 'matic',
        symbol: 'MATIC',
        decimals: 18,
        address: TOKEN_ADDRESSES.matic[97],
        asset: matic,
        vasset: vmatic,
      },
      cake: {
        id: 'cake',
        symbol: 'CAKE',
        decimals: 18,
        address: TOKEN_ADDRESSES.cake[97],
        asset: cake,
        vasset: vcake,
      },
      aave: {
        id: 'aave',
        symbol: 'AAVE',
        decimals: 18,
        address: TOKEN_ADDRESSES.aave[97],
        asset: aave,
        vasset: vaave,
      },
      tusd: {
        id: 'tusd',
        symbol: 'TUSD',
        decimals: 18,
        address: TOKEN_ADDRESSES.tusd[97],
        asset: tusd,
        vasset: vtusd,
      },
      trx: {
        id: 'trx',
        symbol: 'TRX',
        decimals: 18,
        address: TOKEN_ADDRESSES.trx[97],
        asset: trx,
        vasset: vtrx,
      },
      ust: {
        id: 'ust',
        symbol: 'UST',
        decimals: 18,
        address: TOKEN_ADDRESSES.ust[97],
        asset: ust,
        vasset: vust,
      },
      luna: {
        id: 'luna',
        symbol: 'LUNA',
        decimals: 6,
        address: TOKEN_ADDRESSES.luna[97],
        asset: luna,
        vasset: vluna,
      },
      seb: {
        id: 'seb',
        symbol: 'VAI',
        decimals: 18,
        address: TOKEN_ADDRESSES.seb[97],
        asset: seb,
      },
      vrt: {
        id: 'vrt',
        symbol: 'VRT',
        decimals: 18,
        address: TOKEN_ADDRESSES.vrt[97],
        asset: vrt,
      },
    }
  : {
      sxp: {
        id: 'sxp',
        symbol: 'SXP',
        decimals: 18,
        address: TOKEN_ADDRESSES.sxp[56],
        asset: sxp,
        vasset: vsxp,
      },
      usdc: {
        id: 'usdc',
        symbol: 'USDC',
        decimals: 18,
        address: TOKEN_ADDRESSES.usdc[56],
        asset: usdc,
        vasset: vusdc,
      },
      usdt: {
        id: 'usdt',
        symbol: 'USDT',
        decimals: 18,
        address: TOKEN_ADDRESSES.usdt[56],
        asset: usdt,
        vasset: vusdt,
      },
      busd: {
        id: 'busd',
        symbol: 'BUSD',
        decimals: 18,
        address: TOKEN_ADDRESSES.busd[56],
        asset: busd,
        vasset: vbusd,
      },
      wevmos: {
        id: 'wevmos',
        symbol: 'BNB',
        decimals: 18,
        address: undefined,
        asset: wevmos,
        vasset: vbnb,
      },
      mia: {
        id: 'mia',
        symbol: 'MIA',
        decimals: 18,
        address: TOKEN_ADDRESSES.mia[56],
        asset: mia,
        vasset: vmia,
      },
      btcb: {
        id: 'btcb',
        symbol: 'BTCB',
        decimals: 18,
        address: TOKEN_ADDRESSES.btcb[56],
        asset: btc,
        vasset: vbtc,
      },
      eth: {
        id: 'eth',
        symbol: 'ETH',
        decimals: 18,
        address: TOKEN_ADDRESSES.eth[56],
        asset: eth,
        vasset: veth,
      },
      ltc: {
        id: 'ltc',
        symbol: 'LTC',
        decimals: 18,
        address: TOKEN_ADDRESSES.ltc[56],
        asset: ltc,
        vasset: vltc,
      },
      xrp: {
        id: 'xrp',
        symbol: 'XRP',
        decimals: 18,
        address: TOKEN_ADDRESSES.xrp[56],
        asset: xrp,
        vasset: vxrp,
      },
      bch: {
        id: 'bch',
        symbol: 'BCH',
        decimals: 18,
        address: TOKEN_ADDRESSES.bch[56],
        asset: bch,
        vasset: vbch,
      },
      dot: {
        id: 'dot',
        symbol: 'DOT',
        decimals: 18,
        address: TOKEN_ADDRESSES.dot[56],
        asset: dot,
        vasset: vdot,
      },
      link: {
        id: 'link',
        symbol: 'LINK',
        decimals: 18,
        address: TOKEN_ADDRESSES.link[56],
        asset: link,
        vasset: vlink,
      },
      dai: {
        id: 'dai',
        symbol: 'DAI',
        decimals: 18,
        address: TOKEN_ADDRESSES.dai[56],
        asset: dai,
        vasset: vdai,
      },
      fil: {
        id: 'fil',
        symbol: 'FIL',
        decimals: 18,
        address: TOKEN_ADDRESSES.fil[56],
        asset: fil,
        vasset: vfil,
      },
      beth: {
        id: 'beth',
        symbol: 'BETH',
        decimals: 18,
        address: TOKEN_ADDRESSES.beth[56],
        asset: beth,
        vasset: vbeth,
      },
      ada: {
        id: 'ada',
        symbol: 'ADA',
        decimals: 18,
        address: TOKEN_ADDRESSES.ada[56],
        asset: ada,
        vasset: vada,
      },
      doge: {
        id: 'doge',
        symbol: 'DOGE',
        decimals: 8,
        address: TOKEN_ADDRESSES.doge[56],
        asset: doge,
        vasset: vdoge,
      },
      matic: {
        id: 'matic',
        symbol: 'MATIC',
        decimals: 18,
        address: TOKEN_ADDRESSES.matic[56],
        asset: matic,
        vasset: vmatic,
      },
      cake: {
        id: 'cake',
        symbol: 'CAKE',
        decimals: 18,
        address: TOKEN_ADDRESSES.cake[56],
        asset: cake,
        vasset: vcake,
      },
      aave: {
        id: 'aave',
        symbol: 'AAVE',
        decimals: 18,
        address: TOKEN_ADDRESSES.aave[56],
        asset: aave,
        vasset: vaave,
      },
      tusd: {
        id: 'tusd',
        symbol: 'TUSD',
        decimals: 18,
        address: TOKEN_ADDRESSES.tusd[56],
        asset: tusd,
        vasset: vtusd,
      },
      trx: {
        id: 'trx',
        symbol: 'TRX',
        decimals: 18,
        address: TOKEN_ADDRESSES.trx[56],
        asset: trx,
        vasset: vtrx,
      },
      seb: {
        id: 'seb',
        symbol: 'VAI',
        decimals: 18,
        address: TOKEN_ADDRESSES.seb[56],
        asset: seb,
      },
      vrt: {
        id: 'vrt',
        symbol: 'VRT',
        decimals: 18,
        address: TOKEN_ADDRESSES.vrt[56],
        asset: vrt,
      },
      ust: {
        id: 'ust',
        symbol: 'UST',
        decimals: 6,
        address: TOKEN_ADDRESSES.ust[56],
        asset: ust,
        vasset: vust,
      },
      luna: {
        id: 'luna',
        symbol: 'LUNA',
        decimals: 6,
        address: TOKEN_ADDRESSES.luna[56],
        asset: luna,
        vasset: vluna,
      },
    };
*/
//export const VBEP_TOKEN_DECIMALS = 8;
/*
export const NERC_TOKENS = config.isOnTestnet
  ? {
      sxp: {
        id: 'sxp',
        symbol: 'nSXP',
        address: VBEP_TOKEN_ADDRESSES.sxp[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      usdc: {
        id: 'usdc',
        symbol: 'nUSDC',
        address: VBEP_TOKEN_ADDRESSES.usdc[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      usdt: {
        id: 'usdt',
        symbol: 'nUSDT',
        address: VBEP_TOKEN_ADDRESSES.usdt[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      busd: {
        id: 'busd',
        symbol: 'nBUSD',
        address: VBEP_TOKEN_ADDRESSES.busd[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      wevmos: {
        id: 'wevmos',
        symbol: 'nBNB',
        address: VBEP_TOKEN_ADDRESSES.wevmos[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      mia: {
        id: 'mia',
        symbol: 'nMIA',
        address: VBEP_TOKEN_ADDRESSES.mia[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      btcb: {
        id: 'btcb',
        symbol: 'nBTC',
        address: VBEP_TOKEN_ADDRESSES.btcb[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      eth: {
        id: 'eth',
        symbol: 'nETH',
        address: VBEP_TOKEN_ADDRESSES.eth[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      ltc: {
        id: 'ltc',
        symbol: 'nLTC',
        address: VBEP_TOKEN_ADDRESSES.ltc[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      xrp: {
        id: 'xrp',
        symbol: 'nXRP',
        address: VBEP_TOKEN_ADDRESSES.xrp[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      ada: {
        id: 'ada',
        symbol: 'nADA',
        address: VBEP_TOKEN_ADDRESSES.ada[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      doge: {
        id: 'doge',
        symbol: 'nDOGE',
        address: VBEP_TOKEN_ADDRESSES.doge[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      matic: {
        id: 'matic',
        symbol: 'nMATIC',
        address: VBEP_TOKEN_ADDRESSES.matic[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      cake: {
        id: 'cake',
        symbol: 'nCAKE',
        address: VBEP_TOKEN_ADDRESSES.cake[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      aave: {
        id: 'aave',
        symbol: 'nAAVE',
        address: VBEP_TOKEN_ADDRESSES.aave[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      tusd: {
        id: 'tusd',
        symbol: 'nTUSD',
        address: VBEP_TOKEN_ADDRESSES.tusd[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      trx: {
        id: 'trx',
        symbol: 'nTRX',
        address: VBEP_TOKEN_ADDRESSES.trx[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      ust: {
        id: 'ust',
        symbol: 'nUST',
        address: VBEP_TOKEN_ADDRESSES.ust[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
      luna: {
        id: 'luna',
        symbol: 'nLUNA',
        address: VBEP_TOKEN_ADDRESSES.luna[97],
        decimals: NERC_TOKEN_DECIMALS,
      },
    }
  : {
      sxp: {
        id: 'sxp',
        symbol: 'vSXP',
        address: VBEP_TOKEN_ADDRESSES.sxp[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      usdc: {
        id: 'usdc',
        symbol: 'nUSDC',
        address: VBEP_TOKEN_ADDRESSES.usdc[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      usdt: {
        id: 'usdt',
        symbol: 'nUSDT',
        address: VBEP_TOKEN_ADDRESSES.usdt[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      busd: {
        id: 'busd',
        symbol: 'nBUSD',
        address: VBEP_TOKEN_ADDRESSES.busd[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      wevmos: {
        id: 'wevmos',
        symbol: 'nBNB',
        address: VBEP_TOKEN_ADDRESSES.wevmos[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      mia: {
        id: 'mia',
        symbol: 'nMIA',
        address: VBEP_TOKEN_ADDRESSES.mia[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      btcb: {
        id: 'btcb',
        symbol: 'nBTC',
        address: VBEP_TOKEN_ADDRESSES.btcb[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      eth: {
        id: 'eth',
        symbol: 'nETH',
        address: VBEP_TOKEN_ADDRESSES.eth[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      ltc: {
        id: 'ltc',
        symbol: 'nLTC',
        address: VBEP_TOKEN_ADDRESSES.ltc[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      xrp: {
        id: 'xrp',
        symbol: 'nXRP',
        address: VBEP_TOKEN_ADDRESSES.xrp[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      bch: {
        id: 'bch',
        symbol: 'nBCH',
        address: VBEP_TOKEN_ADDRESSES.bch[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      dot: {
        id: 'dot',
        symbol: 'vDOT',
        address: VBEP_TOKEN_ADDRESSES.dot[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      link: {
        id: 'link',
        symbol: 'nLINK',
        address: VBEP_TOKEN_ADDRESSES.link[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      dai: {
        id: 'dai',
        symbol: 'nDAI',
        address: VBEP_TOKEN_ADDRESSES.dai[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      fil: {
        id: 'fil',
        symbol: 'nFIL',
        address: VBEP_TOKEN_ADDRESSES.fil[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      beth: {
        id: 'beth',
        symbol: 'nBETH',
        address: VBEP_TOKEN_ADDRESSES.beth[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      ada: {
        id: 'ada',
        symbol: 'nADA',
        address: VBEP_TOKEN_ADDRESSES.ada[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      doge: {
        id: 'doge',
        symbol: 'nDOGE',
        address: VBEP_TOKEN_ADDRESSES.doge[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      matic: {
        id: 'matic',
        symbol: 'nMATIC',
        address: VBEP_TOKEN_ADDRESSES.matic[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      cake: {
        id: 'cake',
        symbol: 'nCAKE',
        address: VBEP_TOKEN_ADDRESSES.cake[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      aave: {
        id: 'aave',
        symbol: 'nAAVE',
        address: VBEP_TOKEN_ADDRESSES.aave[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      tusd: {
        id: 'tusd',
        symbol: 'nTUSD',
        address: VBEP_TOKEN_ADDRESSES.tusd[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      trx: {
        id: 'trx',
        symbol: 'nTRX',
        address: VBEP_TOKEN_ADDRESSES.trx[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      ust: {
        id: 'ust',
        symbol: 'nUST',
        address: VBEP_TOKEN_ADDRESSES.ust[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
      luna: {
        id: 'luna',
        symbol: 'nLUNA',
        address: VBEP_TOKEN_ADDRESSES.luna[56],
        decimals: NERC_TOKEN_DECIMALS,
      },
    };
*/

export const NERC_TOKEN_DECIMALS = 8;
export const NTOKEN_DECIMALS = 8;

export const NERC20_TOKEN_DECIMALS = 8;

// WONT USE THEM JUST FOR REFERENCE
export const TOKENS_EVMOS = config.isOnTestnet ? { 
  usdc: {
    id: 'usdc',
    symbol: 'USDC',
    decimals: 6,
    address: EVMOS_TOKEN_ADDRESSES.usdc[9000],
    asset: usdc,
    nasset: vusdc,
  },
  usdt: {
    id: 'usdt',
    symbol: 'USDT',
    decimals: 6,
    address: EVMOS_TOKEN_ADDRESSES.usdt[9000], // have nothing 
    asset: usdt,
    nasset: vusdt,
  },
  weth: {
    id: 'weth',
    symbol: 'wETH',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.weth[9000], // have nothing 
    asset: eth,
    nasset: veth,
  },
  frax: {
    id: 'frax',
    symbol: 'FRAX',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.frax[9000], // have nothing 
    asset: frax,
    nasset: vbnb, // TODO : vfrax
  },
  wevmos: {
    id: 'wevmos',
    symbol: 'wEVMOS',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.wevmos[9000],
    asset: wevmos, // TODO : vevmos
    nasset: vbnb, // TODO : vevmos
  },


  mockatom: {
    id: 'mockatom',
    symbol: 'mockATOM',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.mock_atom[9000],
    asset: wevmos, // TODO : vevmos
    nasset: vbnb, // TODO : vevmos
  },
  mockosmo: {
    id: 'mockosmo',
    symbol: 'mockOSMO',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.mock_osmosis[9000],
    asset: wevmos, // TODO : vevmos
    nasset: vbnb, // TODO : vevmos
  },
  mockdai: {
    id: 'mockdai',
    symbol: 'mockDAI',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.dai_mock[9000],
    asset: wevmos, // TODO : vevmos
    nasset: vbnb, // TODO : vevmos
  },
  seb: {
    id: 'seb',
    symbol: 'SEB',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.seb[9000],
    asset: seb,
  },
  mia: {
    id: 'mia',
    symbol: 'MIA',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.mia[9000],
    asset: seb,
  },
/*
  vrt: {
    id: 'vrt',
    symbol: 'VRT',
    decimals: 18,
    address: TOKEN_ADDRESSES.vrt[97],
    asset: vrt,
  },
*/
  wbtc: {
    id: 'wbtc',
    symbol: 'madBTC',
    decimals: 8,
    address: EVMOS_TOKEN_ADDRESSES.wbtc[9000],
    asset: wevmos, // TODO : vevmos
    vasset: vbnb, // TODO : vevmos
  }

} : {
  usdc: {
    id: 'usdc',
    symbol: 'madUSDC',
    decimals: 6,
    address: EVMOS_TOKEN_ADDRESSES.usdc[9001],
    asset: usdc,
    vasset: vusdc,
  },
  usdt: {
    id: 'usdt',
    symbol: 'madUSDT',
    decimals: 6,
    address: EVMOS_TOKEN_ADDRESSES.usdt[9001],
    asset: usdt,
    vasset: vusdt,
  },
  weth: {
    id: 'weth',
    symbol: 'madETH',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.weth[9001],
    asset: eth,
    vasset: veth,
  },
  frax: {
    id: 'frax',
    symbol: 'FRAX',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.frax[9001],
    asset: frax,
    vasset: vbnb, // TODO : vfrax
  },
  wevmos: {
    id: 'wevmos',
    symbol: 'WEVMOS',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.wevmos[9001],
    asset: wevmos, // TODO : vevmos
    vasset: vbnb, // TODO : vevmos
  },
  dai: {
    id: 'dai',
    symbol: 'madDAI',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.dai[9001],
    asset: wevmos, // TODO : vevmos
    vasset: vbnb, // TODO : vevmos
  },
  mia: {
    id: 'mia',
    symbol: 'MIA',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.mia[9001],
    asset: wevmos, // TODO : vevmos
    vasset: vbnb, // TODO : vevmos
  },
  osmosis: {
    id: 'osmosis',
    symbol: 'OSMO',
    decimals: 6,
    address: EVMOS_TOKEN_ADDRESSES.osmosis[9001],
    asset: wevmos, // TODO : vevmos
    vasset: vbnb, // TODO : vevmos
  },
  atom: {
    id: 'atom',
    symbol: 'ATOM',
    decimals: 6,
    address: EVMOS_TOKEN_ADDRESSES.atom[9001],
    asset: wevmos, // TODO : vevmos
    vasset: vbnb, // TODO : vevmos
  },
  wbtc: {
    id: 'wbtc',
    symbol: 'madBTC',
    decimals: 8,
    address: EVMOS_TOKEN_ADDRESSES.wbtc[9001],
    asset: wevmos, // TODO : vevmos
    vasset: vbnb, // TODO : vevmos
  },
  seb: {
    id: 'seb',
    symbol: 'SEB',
    decimals: 18,
    address: EVMOS_TOKEN_ADDRESSES.seb[9000],
    asset: seb,
  },
}
;

export const NTOKENS_EVMOS = config.isOnTestnet ? 
{
  usdc: {
    id: 'usdc',
    symbol: 'nUSDC',
    address: NERC20_TOKEN_ADDRESSES.usdc[9000],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  usdt: {
    id: 'usdt',
    symbol: 'nUSDT',
    address: NERC20_TOKEN_ADDRESSES.usdt[9000],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  weth: {
    id: 'weth',
    symbol: 'nETH',
    address: NERC20_TOKEN_ADDRESSES.weth[9000],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  frax: {
    id: 'frax',
    symbol: 'nFRAX',
    address: NERC20_TOKEN_ADDRESSES.frax[9000],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  wevmos: {
    id: 'wevmos',
    symbol: 'nEVMOS',
    address: NERC20_TOKEN_ADDRESSES.wevmos[9000],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  mockosmo: {
    id: 'mockosmo',
    symbol: 'nMockOSMO',
    address: NERC20_TOKEN_ADDRESSES.mock_osmosis[9000],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  mockatom: {
    id: 'mockatom',
    symbol: 'nMockATOM',
    address: NERC20_TOKEN_ADDRESSES.mock_atom[9000],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  mockdai: {
    id: 'mockdai',
    symbol: 'nDAI',
    address: NERC20_TOKEN_ADDRESSES.dai_mock[9000],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  mia: {
    id: 'mia',
    symbol: 'nMIA',
    address: NERC20_TOKEN_ADDRESSES.mia[9000],
    decimals: NERC20_TOKEN_DECIMALS,
  },

} : {
  usdc: {
    id: 'usdc',
    symbol: 'nUSDC',
    address: NERC20_TOKEN_ADDRESSES.usdc[9001],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  usdt: {
    id: 'usdt',
    symbol: 'nUSDT',
    address: NERC20_TOKEN_ADDRESSES.usdt[9001],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  weth: {
    id: 'weth',
    symbol: 'nETH',
    address: NERC20_TOKEN_ADDRESSES.weth[9001],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  frax: {
    id: 'frax',
    symbol: 'nFRAX',
    address: NERC20_TOKEN_ADDRESSES.frax[9001],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  wevmos: {
    id: 'wevmos',
    symbol: 'nEVMOS',
    address: NERC20_TOKEN_ADDRESSES.wevmos[9001],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  dai: {
    id: 'dai',
    symbol: 'nDAI',
    address: NERC20_TOKEN_ADDRESSES.dai[9001],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  mia: {
    id: 'mia',
    symbol: 'nMIA',
    address: NERC20_TOKEN_ADDRESSES.mia[9001],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  osmosis: {
    id: 'osmosis',
    symbol: 'nOSMO',
    address: NERC20_TOKEN_ADDRESSES.osmosis[9001],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  atom: {
    id: 'atom',
    symbol: 'nATOM',
    address: NERC20_TOKEN_ADDRESSES.atom[9001],
    decimals: NERC20_TOKEN_DECIMALS,
  },
  wbtc: {
    id: 'wbtc',
    symbol: 'nBTC',
    address: NERC20_TOKEN_ADDRESSES.wbtc[9001],
    decimals: NERC20_TOKEN_DECIMALS,
  },
}