/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";
import type BN from "bn.js";
import type { EventEmitter } from "events";
import type { EventLog } from "web3-core";
import type { ContractOptions } from "web3-eth-contract";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type AccrueInterest = ContractEventLog<{
  cashPrior: string;
  interestAccumulated: string;
  borrowIndex: string;
  totalBorrows: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type Borrow = ContractEventLog<{
  borrower: string;
  borrowAmount: string;
  accountBorrows: string;
  totalBorrows: string;
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
export type LiquidateBorrow = ContractEventLog<{
  liquidator: string;
  borrower: string;
  repayAmount: string;
  vTokenCollateral: string;
  seizeTokens: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type Mint = ContractEventLog<{
  minter: string;
  mintAmount: string;
  mintTokens: string;
  0: string;
  1: string;
  2: string;
}>;
export type NewAdmin = ContractEventLog<{
  oldAdmin: string;
  newAdmin: string;
  0: string;
  1: string;
}>;
export type NewComptroller = ContractEventLog<{
  oldComptroller: string;
  newComptroller: string;
  0: string;
  1: string;
}>;
export type NewMarketInterestRateModel = ContractEventLog<{
  oldInterestRateModel: string;
  newInterestRateModel: string;
  0: string;
  1: string;
}>;
export type NewPendingAdmin = ContractEventLog<{
  oldPendingAdmin: string;
  newPendingAdmin: string;
  0: string;
  1: string;
}>;
export type NewReserveFactor = ContractEventLog<{
  oldReserveFactorMantissa: string;
  newReserveFactorMantissa: string;
  0: string;
  1: string;
}>;
export type Redeem = ContractEventLog<{
  redeemer: string;
  redeemAmount: string;
  redeemTokens: string;
  0: string;
  1: string;
  2: string;
}>;
export type RepayBorrow = ContractEventLog<{
  payer: string;
  borrower: string;
  repayAmount: string;
  accountBorrows: string;
  totalBorrows: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type ReservesAdded = ContractEventLog<{
  benefactor: string;
  addAmount: string;
  newTotalReserves: string;
  0: string;
  1: string;
  2: string;
}>;
export type ReservesReduced = ContractEventLog<{
  admin: string;
  reduceAmount: string;
  newTotalReserves: string;
  0: string;
  1: string;
  2: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;

export interface VBnbToken extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): VBnbToken;
  clone(): VBnbToken;
  methods: {
    _acceptAdmin(): NonPayableTransactionObject<string>;

    _reduceReserves(
      reduceAmount: number | string | BN
    ): NonPayableTransactionObject<string>;

    _setComptroller(
      newComptroller: string
    ): NonPayableTransactionObject<string>;

    _setInterestRateModel(
      newInterestRateModel: string
    ): NonPayableTransactionObject<string>;

    _setPendingAdmin(
      newPendingAdmin: string
    ): NonPayableTransactionObject<string>;

    _setReserveFactor(
      newReserveFactorMantissa: number | string | BN
    ): NonPayableTransactionObject<string>;

    accrualBlockNumber(): NonPayableTransactionObject<string>;

    accrueInterest(): NonPayableTransactionObject<string>;

    admin(): NonPayableTransactionObject<string>;

    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    approve(
      spender: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    balanceOf(owner: string): NonPayableTransactionObject<string>;

    balanceOfUnderlying(owner: string): NonPayableTransactionObject<string>;

    borrow(
      borrowAmount: number | string | BN
    ): NonPayableTransactionObject<string>;

    borrowBalanceCurrent(account: string): NonPayableTransactionObject<string>;

    borrowBalanceStored(account: string): NonPayableTransactionObject<string>;

    borrowIndex(): NonPayableTransactionObject<string>;

    borrowRatePerBlock(): NonPayableTransactionObject<string>;

    comptroller(): NonPayableTransactionObject<string>;

    decimals(): NonPayableTransactionObject<string>;

    exchangeRateCurrent(): NonPayableTransactionObject<string>;

    exchangeRateStored(): NonPayableTransactionObject<string>;

    getAccountSnapshot(account: string): NonPayableTransactionObject<{
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    getCash(): NonPayableTransactionObject<string>;

    initialize(
      comptroller_: string,
      interestRateModel_: string,
      initialExchangeRateMantissa_: number | string | BN,
      name_: string,
      symbol_: string,
      decimals_: number | string | BN
    ): NonPayableTransactionObject<void>;

    interestRateModel(): NonPayableTransactionObject<string>;

    isNToken(): NonPayableTransactionObject<boolean>;

    liquidateBorrow(
      borrower: string,
      vTokenCollateral: string
    ): PayableTransactionObject<void>;

    mint(): PayableTransactionObject<void>;

    name(): NonPayableTransactionObject<string>;

    pendingAdmin(): NonPayableTransactionObject<string>;

    redeem(
      redeemTokens: number | string | BN
    ): NonPayableTransactionObject<string>;

    redeemUnderlying(
      redeemAmount: number | string | BN
    ): NonPayableTransactionObject<string>;

    repayBorrow(): PayableTransactionObject<void>;

    repayBorrowBehalf(borrower: string): PayableTransactionObject<void>;

    reserveFactorMantissa(): NonPayableTransactionObject<string>;

    seize(
      liquidator: string,
      borrower: string,
      seizeTokens: number | string | BN
    ): NonPayableTransactionObject<string>;

    supplyRatePerBlock(): NonPayableTransactionObject<string>;

    symbol(): NonPayableTransactionObject<string>;

    totalBorrows(): NonPayableTransactionObject<string>;

    totalBorrowsCurrent(): NonPayableTransactionObject<string>;

    totalReserves(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transfer(
      dst: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      src: string,
      dst: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    AccrueInterest(cb?: Callback<AccrueInterest>): EventEmitter;
    AccrueInterest(
      options?: EventOptions,
      cb?: Callback<AccrueInterest>
    ): EventEmitter;

    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    Borrow(cb?: Callback<Borrow>): EventEmitter;
    Borrow(options?: EventOptions, cb?: Callback<Borrow>): EventEmitter;

    Failure(cb?: Callback<Failure>): EventEmitter;
    Failure(options?: EventOptions, cb?: Callback<Failure>): EventEmitter;

    LiquidateBorrow(cb?: Callback<LiquidateBorrow>): EventEmitter;
    LiquidateBorrow(
      options?: EventOptions,
      cb?: Callback<LiquidateBorrow>
    ): EventEmitter;

    Mint(cb?: Callback<Mint>): EventEmitter;
    Mint(options?: EventOptions, cb?: Callback<Mint>): EventEmitter;

    NewAdmin(cb?: Callback<NewAdmin>): EventEmitter;
    NewAdmin(options?: EventOptions, cb?: Callback<NewAdmin>): EventEmitter;

    NewComptroller(cb?: Callback<NewComptroller>): EventEmitter;
    NewComptroller(
      options?: EventOptions,
      cb?: Callback<NewComptroller>
    ): EventEmitter;

    NewMarketInterestRateModel(
      cb?: Callback<NewMarketInterestRateModel>
    ): EventEmitter;
    NewMarketInterestRateModel(
      options?: EventOptions,
      cb?: Callback<NewMarketInterestRateModel>
    ): EventEmitter;

    NewPendingAdmin(cb?: Callback<NewPendingAdmin>): EventEmitter;
    NewPendingAdmin(
      options?: EventOptions,
      cb?: Callback<NewPendingAdmin>
    ): EventEmitter;

    NewReserveFactor(cb?: Callback<NewReserveFactor>): EventEmitter;
    NewReserveFactor(
      options?: EventOptions,
      cb?: Callback<NewReserveFactor>
    ): EventEmitter;

    Redeem(cb?: Callback<Redeem>): EventEmitter;
    Redeem(options?: EventOptions, cb?: Callback<Redeem>): EventEmitter;

    RepayBorrow(cb?: Callback<RepayBorrow>): EventEmitter;
    RepayBorrow(
      options?: EventOptions,
      cb?: Callback<RepayBorrow>
    ): EventEmitter;

    ReservesAdded(cb?: Callback<ReservesAdded>): EventEmitter;
    ReservesAdded(
      options?: EventOptions,
      cb?: Callback<ReservesAdded>
    ): EventEmitter;

    ReservesReduced(cb?: Callback<ReservesReduced>): EventEmitter;
    ReservesReduced(
      options?: EventOptions,
      cb?: Callback<ReservesReduced>
    ): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AccrueInterest", cb: Callback<AccrueInterest>): void;
  once(
    event: "AccrueInterest",
    options: EventOptions,
    cb: Callback<AccrueInterest>
  ): void;

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "Borrow", cb: Callback<Borrow>): void;
  once(event: "Borrow", options: EventOptions, cb: Callback<Borrow>): void;

  once(event: "Failure", cb: Callback<Failure>): void;
  once(event: "Failure", options: EventOptions, cb: Callback<Failure>): void;

  once(event: "LiquidateBorrow", cb: Callback<LiquidateBorrow>): void;
  once(
    event: "LiquidateBorrow",
    options: EventOptions,
    cb: Callback<LiquidateBorrow>
  ): void;

  once(event: "Mint", cb: Callback<Mint>): void;
  once(event: "Mint", options: EventOptions, cb: Callback<Mint>): void;

  once(event: "NewAdmin", cb: Callback<NewAdmin>): void;
  once(event: "NewAdmin", options: EventOptions, cb: Callback<NewAdmin>): void;

  once(event: "NewComptroller", cb: Callback<NewComptroller>): void;
  once(
    event: "NewComptroller",
    options: EventOptions,
    cb: Callback<NewComptroller>
  ): void;

  once(
    event: "NewMarketInterestRateModel",
    cb: Callback<NewMarketInterestRateModel>
  ): void;
  once(
    event: "NewMarketInterestRateModel",
    options: EventOptions,
    cb: Callback<NewMarketInterestRateModel>
  ): void;

  once(event: "NewPendingAdmin", cb: Callback<NewPendingAdmin>): void;
  once(
    event: "NewPendingAdmin",
    options: EventOptions,
    cb: Callback<NewPendingAdmin>
  ): void;

  once(event: "NewReserveFactor", cb: Callback<NewReserveFactor>): void;
  once(
    event: "NewReserveFactor",
    options: EventOptions,
    cb: Callback<NewReserveFactor>
  ): void;

  once(event: "Redeem", cb: Callback<Redeem>): void;
  once(event: "Redeem", options: EventOptions, cb: Callback<Redeem>): void;

  once(event: "RepayBorrow", cb: Callback<RepayBorrow>): void;
  once(
    event: "RepayBorrow",
    options: EventOptions,
    cb: Callback<RepayBorrow>
  ): void;

  once(event: "ReservesAdded", cb: Callback<ReservesAdded>): void;
  once(
    event: "ReservesAdded",
    options: EventOptions,
    cb: Callback<ReservesAdded>
  ): void;

  once(event: "ReservesReduced", cb: Callback<ReservesReduced>): void;
  once(
    event: "ReservesReduced",
    options: EventOptions,
    cb: Callback<ReservesReduced>
  ): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}
