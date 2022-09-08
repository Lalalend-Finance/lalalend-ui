/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type ActionPaused = ContractEventLog<{
  action: string;
  pauseState: boolean;
  0: string;
  1: boolean;
}>;
export type ActionPausedMarket = ContractEventLog<{
  nToken: string;
  action: string;
  pauseState: boolean;
  0: string;
  1: string;
  2: boolean;
}>;
export type ActionProtocolPaused = ContractEventLog<{
  state: boolean;
  0: boolean;
}>;
export type DistributedBorrowerMia = ContractEventLog<{
  nToken: string;
  borrower: string;
  miaDelta: string;
  miaBorrowIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type DistributedSEBVaultMia = ContractEventLog<{
  amount: string;
  0: string;
}>;
export type DistributedSupplierMia = ContractEventLog<{
  nToken: string;
  supplier: string;
  miaDelta: string;
  miaSupplyIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type Failure = ContractEventLog<{
  error: string;
  info: string;
  detail: string;
  0: string;
  1: string;
  2: string;
}>;
export type MarketEntered = ContractEventLog<{
  nToken: string;
  account: string;
  0: string;
  1: string;
}>;
export type MarketExited = ContractEventLog<{
  nToken: string;
  account: string;
  0: string;
  1: string;
}>;
export type MarketListed = ContractEventLog<{
  nToken: string;
  0: string;
}>;
export type MiaGranted = ContractEventLog<{
  recipient: string;
  amount: string;
  0: string;
  1: string;
}>;
export type MiaSpeedUpdated = ContractEventLog<{
  nToken: string;
  newSpeed: string;
  0: string;
  1: string;
}>;
export type NewBorrowCap = ContractEventLog<{
  nToken: string;
  newBorrowCap: string;
  0: string;
  1: string;
}>;
export type NewBorrowCapGuardian = ContractEventLog<{
  oldBorrowCapGuardian: string;
  newBorrowCapGuardian: string;
  0: string;
  1: string;
}>;
export type NewCloseFactor = ContractEventLog<{
  oldCloseFactorMantissa: string;
  newCloseFactorMantissa: string;
  0: string;
  1: string;
}>;
export type NewCollateralFactor = ContractEventLog<{
  nToken: string;
  oldCollateralFactorMantissa: string;
  newCollateralFactorMantissa: string;
  0: string;
  1: string;
  2: string;
}>;
export type NewComptrollerLens = ContractEventLog<{
  oldComptrollerLens: string;
  newComptrollerLens: string;
  0: string;
  1: string;
}>;
export type NewLiquidationIncentive = ContractEventLog<{
  oldLiquidationIncentiveMantissa: string;
  newLiquidationIncentiveMantissa: string;
  0: string;
  1: string;
}>;
export type NewLiquidatorContract = ContractEventLog<{
  oldLiquidatorContract: string;
  newLiquidatorContract: string;
  0: string;
  1: string;
}>;
export type NewMiaSEBVaultRate = ContractEventLog<{
  oldMiaSEBVaultRate: string;
  newMiaSEBVaultRate: string;
  0: string;
  1: string;
}>;
export type NewPauseGuardian = ContractEventLog<{
  oldPauseGuardian: string;
  newPauseGuardian: string;
  0: string;
  1: string;
}>;
export type NewPriceOracle = ContractEventLog<{
  oldPriceOracle: string;
  newPriceOracle: string;
  0: string;
  1: string;
}>;
export type NewSEBController = ContractEventLog<{
  oldSEBController: string;
  newSEBController: string;
  0: string;
  1: string;
}>;
export type NewSEBMintRate = ContractEventLog<{
  oldSEBMintRate: string;
  newSEBMintRate: string;
  0: string;
  1: string;
}>;
export type NewSEBVaultInfo = ContractEventLog<{
  vault_: string;
  releaseStartBlock_: string;
  releaseInterval_: string;
  0: string;
  1: string;
  2: string;
}>;
export type NewSupplyCap = ContractEventLog<{
  nToken: string;
  newSupplyCap: string;
  0: string;
  1: string;
}>;
export type NewTreasuryAddress = ContractEventLog<{
  oldTreasuryAddress: string;
  newTreasuryAddress: string;
  0: string;
  1: string;
}>;
export type NewTreasuryGuardian = ContractEventLog<{
  oldTreasuryGuardian: string;
  newTreasuryGuardian: string;
  0: string;
  1: string;
}>;
export type NewTreasuryPercent = ContractEventLog<{
  oldTreasuryPercent: string;
  newTreasuryPercent: string;
  0: string;
  1: string;
}>;

export interface Comptroller extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Comptroller;
  clone(): Comptroller;
  methods: {
    _become(unitroller: string): NonPayableTransactionObject<void>;

    _grantMIA(
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    _setBorrowCapGuardian(
      newBorrowCapGuardian: string
    ): NonPayableTransactionObject<void>;

    _setCloseFactor(
      newCloseFactorMantissa: number | string | BN
    ): NonPayableTransactionObject<string>;

    _setCollateralFactor(
      nToken: string,
      newCollateralFactorMantissa: number | string | BN
    ): NonPayableTransactionObject<string>;

    _setComptrollerLens(
      comptrollerLens_: string
    ): NonPayableTransactionObject<string>;

    _setLiquidationIncentive(
      newLiquidationIncentiveMantissa: number | string | BN
    ): NonPayableTransactionObject<string>;

    _setLiquidatorContract(
      newLiquidatorContract_: string
    ): NonPayableTransactionObject<void>;

    _setMarketBorrowCaps(
      nTokens: string[],
      newBorrowCaps: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    _setMarketSupplyCaps(
      nTokens: string[],
      newSupplyCaps: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    _setMiaSEBVaultRate(
      miaSEBVaultRate_: number | string | BN
    ): NonPayableTransactionObject<void>;

    _setMiaSpeed(
      nToken: string,
      miaSpeed: number | string | BN
    ): NonPayableTransactionObject<void>;

    _setPauseGuardian(
      newPauseGuardian: string
    ): NonPayableTransactionObject<string>;

    _setPriceOracle(newOracle: string): NonPayableTransactionObject<string>;

    _setProtocolPaused(state: boolean): NonPayableTransactionObject<boolean>;

    _setSEBController(
      sebController_: string
    ): NonPayableTransactionObject<string>;

    _setSEBMintRate(
      newSEBMintRate: number | string | BN
    ): NonPayableTransactionObject<string>;

    _setSEBVaultInfo(
      vault_: string,
      releaseStartBlock_: number | string | BN,
      minReleaseAmount_: number | string | BN
    ): NonPayableTransactionObject<void>;

    _setTreasuryData(
      newTreasuryGuardian: string,
      newTreasuryAddress: string,
      newTreasuryPercent: number | string | BN
    ): NonPayableTransactionObject<string>;

    _supportMarket(nToken: string): NonPayableTransactionObject<string>;

    accountAssets(
      arg0: string,
      arg1: number | string | BN
    ): NonPayableTransactionObject<string>;

    admin(): NonPayableTransactionObject<string>;

    allMarkets(arg0: number | string | BN): NonPayableTransactionObject<string>;

    borrowAllowed(
      nToken: string,
      borrower: string,
      borrowAmount: number | string | BN
    ): NonPayableTransactionObject<string>;

    borrowCapGuardian(): NonPayableTransactionObject<string>;

    borrowCaps(arg0: string): NonPayableTransactionObject<string>;

    borrowGuardianPaused(arg0: string): NonPayableTransactionObject<boolean>;

    borrowVerify(
      nToken: string,
      borrower: string,
      borrowAmount: number | string | BN
    ): NonPayableTransactionObject<void>;

    checkMembership(
      account: string,
      nToken: string
    ): NonPayableTransactionObject<boolean>;

    "claimMia(address[],address[],bool,bool)"(
      holders: string[],
      nTokens: string[],
      borrowers: boolean,
      suppliers: boolean
    ): NonPayableTransactionObject<void>;

    "claimMia(address)"(holder: string): NonPayableTransactionObject<void>;

    "claimMia(address,address[])"(
      holder: string,
      nTokens: string[]
    ): NonPayableTransactionObject<void>;

    "claimMia(address[],address[],bool,bool,bool)"(
      holders: string[],
      nTokens: string[],
      borrowers: boolean,
      suppliers: boolean,
      collateral: boolean
    ): NonPayableTransactionObject<void>;

    claimMiaAsCollateral(holder: string): NonPayableTransactionObject<void>;

    closeFactorMantissa(): NonPayableTransactionObject<string>;

    comptrollerImplementation(): NonPayableTransactionObject<string>;

    comptrollerLens(): NonPayableTransactionObject<string>;

    enterMarkets(nTokens: string[]): NonPayableTransactionObject<string[]>;

    exitMarket(nTokenAddress: string): NonPayableTransactionObject<string>;

    getAccountLiquidity(account: string): NonPayableTransactionObject<{
      0: string;
      1: string;
      2: string;
    }>;

    getAllMarkets(): NonPayableTransactionObject<string[]>;

    getAssetsIn(account: string): NonPayableTransactionObject<string[]>;

    getBlockNumber(): NonPayableTransactionObject<string>;

    getHypotheticalAccountLiquidity(
      account: string,
      nTokenModify: string,
      redeemTokens: number | string | BN,
      borrowAmount: number | string | BN
    ): NonPayableTransactionObject<{
      0: string;
      1: string;
      2: string;
    }>;

    getMiaAddress(): NonPayableTransactionObject<string>;

    getMiaOnTokenAddress(): NonPayableTransactionObject<string>;

    isComptroller(): NonPayableTransactionObject<boolean>;

    liquidateBorrowAllowed(
      nTokenBorrowed: string,
      nTokenCollateral: string,
      liquidator: string,
      borrower: string,
      repayAmount: number | string | BN
    ): NonPayableTransactionObject<string>;

    liquidateBorrowVerify(
      nTokenBorrowed: string,
      nTokenCollateral: string,
      liquidator: string,
      borrower: string,
      actualRepayAmount: number | string | BN,
      seizeTokens: number | string | BN
    ): NonPayableTransactionObject<void>;

    liquidateCalculateSeizeTokens(
      nTokenBorrowed: string,
      nTokenCollateral: string,
      actualRepayAmount: number | string | BN
    ): NonPayableTransactionObject<{
      0: string;
      1: string;
    }>;

    liquidateSEBCalculateSeizeTokens(
      nTokenCollateral: string,
      actualRepayAmount: number | string | BN
    ): NonPayableTransactionObject<{
      0: string;
      1: string;
    }>;

    liquidationIncentiveMantissa(): NonPayableTransactionObject<string>;

    liquidatorContract(): NonPayableTransactionObject<string>;

    markets(arg0: string): NonPayableTransactionObject<{
      isListed: boolean;
      collateralFactorMantissa: string;
      isMia: boolean;
      0: boolean;
      1: string;
      2: boolean;
    }>;

    maxAssets(): NonPayableTransactionObject<string>;

    miaAccrued(arg0: string): NonPayableTransactionObject<string>;

    miaBorrowState(arg0: string): NonPayableTransactionObject<{
      index: string;
      block: string;
      0: string;
      1: string;
    }>;

    miaBorrowerIndex(
      arg0: string,
      arg1: string
    ): NonPayableTransactionObject<string>;

    miaInitialIndex(): NonPayableTransactionObject<string>;

    miaRate(): NonPayableTransactionObject<string>;

    miaSEBVaultRate(): NonPayableTransactionObject<string>;

    miaSpeeds(arg0: string): NonPayableTransactionObject<string>;

    miaSupplierIndex(
      arg0: string,
      arg1: string
    ): NonPayableTransactionObject<string>;

    miaSupplyState(arg0: string): NonPayableTransactionObject<{
      index: string;
      block: string;
      0: string;
      1: string;
    }>;

    minReleaseAmount(): NonPayableTransactionObject<string>;

    mintAllowed(
      nToken: string,
      minter: string,
      mintAmount: number | string | BN
    ): NonPayableTransactionObject<string>;

    mintGuardianPaused(arg0: string): NonPayableTransactionObject<boolean>;

    mintSEBGuardianPaused(): NonPayableTransactionObject<boolean>;

    mintVerify(
      nToken: string,
      minter: string,
      actualMintAmount: number | string | BN,
      mintTokens: number | string | BN
    ): NonPayableTransactionObject<void>;

    mintedSEBs(arg0: string): NonPayableTransactionObject<string>;

    oracle(): NonPayableTransactionObject<string>;

    pauseGuardian(): NonPayableTransactionObject<string>;

    pendingAdmin(): NonPayableTransactionObject<string>;

    pendingComptrollerImplementation(): NonPayableTransactionObject<string>;

    protocolPaused(): NonPayableTransactionObject<boolean>;

    redeemAllowed(
      nToken: string,
      redeemer: string,
      redeemTokens: number | string | BN
    ): NonPayableTransactionObject<string>;

    redeemVerify(
      nToken: string,
      redeemer: string,
      redeemAmount: number | string | BN,
      redeemTokens: number | string | BN
    ): NonPayableTransactionObject<void>;

    releaseStartBlock(): NonPayableTransactionObject<string>;

    releaseToVault(): NonPayableTransactionObject<void>;

    repayBorrowAllowed(
      nToken: string,
      payer: string,
      borrower: string,
      repayAmount: number | string | BN
    ): NonPayableTransactionObject<string>;

    repayBorrowVerify(
      nToken: string,
      payer: string,
      borrower: string,
      actualRepayAmount: number | string | BN,
      borrowerIndex: number | string | BN
    ): NonPayableTransactionObject<void>;

    repaySEBGuardianPaused(): NonPayableTransactionObject<boolean>;

    sebController(): NonPayableTransactionObject<string>;

    sebMintRate(): NonPayableTransactionObject<string>;

    sebVaultAddress(): NonPayableTransactionObject<string>;

    seizeAllowed(
      nTokenCollateral: string,
      nTokenBorrowed: string,
      liquidator: string,
      borrower: string,
      seizeTokens: number | string | BN
    ): NonPayableTransactionObject<string>;

    seizeGuardianPaused(): NonPayableTransactionObject<boolean>;

    seizeVerify(
      nTokenCollateral: string,
      nTokenBorrowed: string,
      liquidator: string,
      borrower: string,
      seizeTokens: number | string | BN
    ): NonPayableTransactionObject<void>;

    setMintedSEBOf(
      owner: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<string>;

    supplyCaps(arg0: string): NonPayableTransactionObject<string>;

    transferAllowed(
      nToken: string,
      src: string,
      dst: string,
      transferTokens: number | string | BN
    ): NonPayableTransactionObject<string>;

    transferGuardianPaused(): NonPayableTransactionObject<boolean>;

    transferVerify(
      nToken: string,
      src: string,
      dst: string,
      transferTokens: number | string | BN
    ): NonPayableTransactionObject<void>;

    treasuryAddress(): NonPayableTransactionObject<string>;

    treasuryGuardian(): NonPayableTransactionObject<string>;

    treasuryPercent(): NonPayableTransactionObject<string>;
  };
  events: {
    ActionPaused(cb?: Callback<ActionPaused>): EventEmitter;
    ActionPaused(
      options?: EventOptions,
      cb?: Callback<ActionPaused>
    ): EventEmitter;

    ActionPausedMarket(cb?: Callback<ActionPausedMarket>): EventEmitter;
    ActionPausedMarket(
      options?: EventOptions,
      cb?: Callback<ActionPausedMarket>
    ): EventEmitter;

    ActionProtocolPaused(cb?: Callback<ActionProtocolPaused>): EventEmitter;
    ActionProtocolPaused(
      options?: EventOptions,
      cb?: Callback<ActionProtocolPaused>
    ): EventEmitter;

    DistributedBorrowerMia(cb?: Callback<DistributedBorrowerMia>): EventEmitter;
    DistributedBorrowerMia(
      options?: EventOptions,
      cb?: Callback<DistributedBorrowerMia>
    ): EventEmitter;

    DistributedSEBVaultMia(cb?: Callback<DistributedSEBVaultMia>): EventEmitter;
    DistributedSEBVaultMia(
      options?: EventOptions,
      cb?: Callback<DistributedSEBVaultMia>
    ): EventEmitter;

    DistributedSupplierMia(cb?: Callback<DistributedSupplierMia>): EventEmitter;
    DistributedSupplierMia(
      options?: EventOptions,
      cb?: Callback<DistributedSupplierMia>
    ): EventEmitter;

    Failure(cb?: Callback<Failure>): EventEmitter;
    Failure(options?: EventOptions, cb?: Callback<Failure>): EventEmitter;

    MarketEntered(cb?: Callback<MarketEntered>): EventEmitter;
    MarketEntered(
      options?: EventOptions,
      cb?: Callback<MarketEntered>
    ): EventEmitter;

    MarketExited(cb?: Callback<MarketExited>): EventEmitter;
    MarketExited(
      options?: EventOptions,
      cb?: Callback<MarketExited>
    ): EventEmitter;

    MarketListed(cb?: Callback<MarketListed>): EventEmitter;
    MarketListed(
      options?: EventOptions,
      cb?: Callback<MarketListed>
    ): EventEmitter;

    MiaGranted(cb?: Callback<MiaGranted>): EventEmitter;
    MiaGranted(options?: EventOptions, cb?: Callback<MiaGranted>): EventEmitter;

    MiaSpeedUpdated(cb?: Callback<MiaSpeedUpdated>): EventEmitter;
    MiaSpeedUpdated(
      options?: EventOptions,
      cb?: Callback<MiaSpeedUpdated>
    ): EventEmitter;

    NewBorrowCap(cb?: Callback<NewBorrowCap>): EventEmitter;
    NewBorrowCap(
      options?: EventOptions,
      cb?: Callback<NewBorrowCap>
    ): EventEmitter;

    NewBorrowCapGuardian(cb?: Callback<NewBorrowCapGuardian>): EventEmitter;
    NewBorrowCapGuardian(
      options?: EventOptions,
      cb?: Callback<NewBorrowCapGuardian>
    ): EventEmitter;

    NewCloseFactor(cb?: Callback<NewCloseFactor>): EventEmitter;
    NewCloseFactor(
      options?: EventOptions,
      cb?: Callback<NewCloseFactor>
    ): EventEmitter;

    NewCollateralFactor(cb?: Callback<NewCollateralFactor>): EventEmitter;
    NewCollateralFactor(
      options?: EventOptions,
      cb?: Callback<NewCollateralFactor>
    ): EventEmitter;

    NewComptrollerLens(cb?: Callback<NewComptrollerLens>): EventEmitter;
    NewComptrollerLens(
      options?: EventOptions,
      cb?: Callback<NewComptrollerLens>
    ): EventEmitter;

    NewLiquidationIncentive(
      cb?: Callback<NewLiquidationIncentive>
    ): EventEmitter;
    NewLiquidationIncentive(
      options?: EventOptions,
      cb?: Callback<NewLiquidationIncentive>
    ): EventEmitter;

    NewLiquidatorContract(cb?: Callback<NewLiquidatorContract>): EventEmitter;
    NewLiquidatorContract(
      options?: EventOptions,
      cb?: Callback<NewLiquidatorContract>
    ): EventEmitter;

    NewMiaSEBVaultRate(cb?: Callback<NewMiaSEBVaultRate>): EventEmitter;
    NewMiaSEBVaultRate(
      options?: EventOptions,
      cb?: Callback<NewMiaSEBVaultRate>
    ): EventEmitter;

    NewPauseGuardian(cb?: Callback<NewPauseGuardian>): EventEmitter;
    NewPauseGuardian(
      options?: EventOptions,
      cb?: Callback<NewPauseGuardian>
    ): EventEmitter;

    NewPriceOracle(cb?: Callback<NewPriceOracle>): EventEmitter;
    NewPriceOracle(
      options?: EventOptions,
      cb?: Callback<NewPriceOracle>
    ): EventEmitter;

    NewSEBController(cb?: Callback<NewSEBController>): EventEmitter;
    NewSEBController(
      options?: EventOptions,
      cb?: Callback<NewSEBController>
    ): EventEmitter;

    NewSEBMintRate(cb?: Callback<NewSEBMintRate>): EventEmitter;
    NewSEBMintRate(
      options?: EventOptions,
      cb?: Callback<NewSEBMintRate>
    ): EventEmitter;

    NewSEBVaultInfo(cb?: Callback<NewSEBVaultInfo>): EventEmitter;
    NewSEBVaultInfo(
      options?: EventOptions,
      cb?: Callback<NewSEBVaultInfo>
    ): EventEmitter;

    NewSupplyCap(cb?: Callback<NewSupplyCap>): EventEmitter;
    NewSupplyCap(
      options?: EventOptions,
      cb?: Callback<NewSupplyCap>
    ): EventEmitter;

    NewTreasuryAddress(cb?: Callback<NewTreasuryAddress>): EventEmitter;
    NewTreasuryAddress(
      options?: EventOptions,
      cb?: Callback<NewTreasuryAddress>
    ): EventEmitter;

    NewTreasuryGuardian(cb?: Callback<NewTreasuryGuardian>): EventEmitter;
    NewTreasuryGuardian(
      options?: EventOptions,
      cb?: Callback<NewTreasuryGuardian>
    ): EventEmitter;

    NewTreasuryPercent(cb?: Callback<NewTreasuryPercent>): EventEmitter;
    NewTreasuryPercent(
      options?: EventOptions,
      cb?: Callback<NewTreasuryPercent>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "ActionPaused", cb: Callback<ActionPaused>): void;
  once(
    event: "ActionPaused",
    options: EventOptions,
    cb: Callback<ActionPaused>
  ): void;

  once(event: "ActionPausedMarket", cb: Callback<ActionPausedMarket>): void;
  once(
    event: "ActionPausedMarket",
    options: EventOptions,
    cb: Callback<ActionPausedMarket>
  ): void;

  once(event: "ActionProtocolPaused", cb: Callback<ActionProtocolPaused>): void;
  once(
    event: "ActionProtocolPaused",
    options: EventOptions,
    cb: Callback<ActionProtocolPaused>
  ): void;

  once(
    event: "DistributedBorrowerMia",
    cb: Callback<DistributedBorrowerMia>
  ): void;
  once(
    event: "DistributedBorrowerMia",
    options: EventOptions,
    cb: Callback<DistributedBorrowerMia>
  ): void;

  once(
    event: "DistributedSEBVaultMia",
    cb: Callback<DistributedSEBVaultMia>
  ): void;
  once(
    event: "DistributedSEBVaultMia",
    options: EventOptions,
    cb: Callback<DistributedSEBVaultMia>
  ): void;

  once(
    event: "DistributedSupplierMia",
    cb: Callback<DistributedSupplierMia>
  ): void;
  once(
    event: "DistributedSupplierMia",
    options: EventOptions,
    cb: Callback<DistributedSupplierMia>
  ): void;

  once(event: "Failure", cb: Callback<Failure>): void;
  once(event: "Failure", options: EventOptions, cb: Callback<Failure>): void;

  once(event: "MarketEntered", cb: Callback<MarketEntered>): void;
  once(
    event: "MarketEntered",
    options: EventOptions,
    cb: Callback<MarketEntered>
  ): void;

  once(event: "MarketExited", cb: Callback<MarketExited>): void;
  once(
    event: "MarketExited",
    options: EventOptions,
    cb: Callback<MarketExited>
  ): void;

  once(event: "MarketListed", cb: Callback<MarketListed>): void;
  once(
    event: "MarketListed",
    options: EventOptions,
    cb: Callback<MarketListed>
  ): void;

  once(event: "MiaGranted", cb: Callback<MiaGranted>): void;
  once(
    event: "MiaGranted",
    options: EventOptions,
    cb: Callback<MiaGranted>
  ): void;

  once(event: "MiaSpeedUpdated", cb: Callback<MiaSpeedUpdated>): void;
  once(
    event: "MiaSpeedUpdated",
    options: EventOptions,
    cb: Callback<MiaSpeedUpdated>
  ): void;

  once(event: "NewBorrowCap", cb: Callback<NewBorrowCap>): void;
  once(
    event: "NewBorrowCap",
    options: EventOptions,
    cb: Callback<NewBorrowCap>
  ): void;

  once(event: "NewBorrowCapGuardian", cb: Callback<NewBorrowCapGuardian>): void;
  once(
    event: "NewBorrowCapGuardian",
    options: EventOptions,
    cb: Callback<NewBorrowCapGuardian>
  ): void;

  once(event: "NewCloseFactor", cb: Callback<NewCloseFactor>): void;
  once(
    event: "NewCloseFactor",
    options: EventOptions,
    cb: Callback<NewCloseFactor>
  ): void;

  once(event: "NewCollateralFactor", cb: Callback<NewCollateralFactor>): void;
  once(
    event: "NewCollateralFactor",
    options: EventOptions,
    cb: Callback<NewCollateralFactor>
  ): void;

  once(event: "NewComptrollerLens", cb: Callback<NewComptrollerLens>): void;
  once(
    event: "NewComptrollerLens",
    options: EventOptions,
    cb: Callback<NewComptrollerLens>
  ): void;

  once(
    event: "NewLiquidationIncentive",
    cb: Callback<NewLiquidationIncentive>
  ): void;
  once(
    event: "NewLiquidationIncentive",
    options: EventOptions,
    cb: Callback<NewLiquidationIncentive>
  ): void;

  once(
    event: "NewLiquidatorContract",
    cb: Callback<NewLiquidatorContract>
  ): void;
  once(
    event: "NewLiquidatorContract",
    options: EventOptions,
    cb: Callback<NewLiquidatorContract>
  ): void;

  once(event: "NewMiaSEBVaultRate", cb: Callback<NewMiaSEBVaultRate>): void;
  once(
    event: "NewMiaSEBVaultRate",
    options: EventOptions,
    cb: Callback<NewMiaSEBVaultRate>
  ): void;

  once(event: "NewPauseGuardian", cb: Callback<NewPauseGuardian>): void;
  once(
    event: "NewPauseGuardian",
    options: EventOptions,
    cb: Callback<NewPauseGuardian>
  ): void;

  once(event: "NewPriceOracle", cb: Callback<NewPriceOracle>): void;
  once(
    event: "NewPriceOracle",
    options: EventOptions,
    cb: Callback<NewPriceOracle>
  ): void;

  once(event: "NewSEBController", cb: Callback<NewSEBController>): void;
  once(
    event: "NewSEBController",
    options: EventOptions,
    cb: Callback<NewSEBController>
  ): void;

  once(event: "NewSEBMintRate", cb: Callback<NewSEBMintRate>): void;
  once(
    event: "NewSEBMintRate",
    options: EventOptions,
    cb: Callback<NewSEBMintRate>
  ): void;

  once(event: "NewSEBVaultInfo", cb: Callback<NewSEBVaultInfo>): void;
  once(
    event: "NewSEBVaultInfo",
    options: EventOptions,
    cb: Callback<NewSEBVaultInfo>
  ): void;

  once(event: "NewSupplyCap", cb: Callback<NewSupplyCap>): void;
  once(
    event: "NewSupplyCap",
    options: EventOptions,
    cb: Callback<NewSupplyCap>
  ): void;

  once(event: "NewTreasuryAddress", cb: Callback<NewTreasuryAddress>): void;
  once(
    event: "NewTreasuryAddress",
    options: EventOptions,
    cb: Callback<NewTreasuryAddress>
  ): void;

  once(event: "NewTreasuryGuardian", cb: Callback<NewTreasuryGuardian>): void;
  once(
    event: "NewTreasuryGuardian",
    options: EventOptions,
    cb: Callback<NewTreasuryGuardian>
  ): void;

  once(event: "NewTreasuryPercent", cb: Callback<NewTreasuryPercent>): void;
  once(
    event: "NewTreasuryPercent",
    options: EventOptions,
    cb: Callback<NewTreasuryPercent>
  ): void;
}