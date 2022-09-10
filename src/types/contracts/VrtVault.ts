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

export type AdminTransfered = ContractEventLog<{
  oldAdmin: string;
  newAdmin: string;
  0: string;
  1: string;
}>;
export type Claim = ContractEventLog<{
  user: string;
  interestAmount: string;
  0: string;
  1: string;
}>;
export type Deposit = ContractEventLog<{
  user: string;
  amount: string;
  0: string;
  1: string;
}>;
export type VaultPaused = ContractEventLog<{
  admin: string;
  0: string;
}>;
export type VaultResumed = ContractEventLog<{
  admin: string;
  0: string;
}>;
export type Withdraw = ContractEventLog<{
  user: string;
  withdrawnAmount: string;
  totalPrincipalAmount: string;
  accruedInterest: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type WithdrawToken = ContractEventLog<{
  tokenAddress: string;
  receiver: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;

export interface VrtVault extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): VrtVault;
  clone(): VrtVault;
  methods: {
    _become(vrtVaultProxy: string): NonPayableTransactionObject<void>;

    _notEntered(): NonPayableTransactionObject<boolean>;

    admin(): NonPayableTransactionObject<string>;

    claim(): NonPayableTransactionObject<void>;

    deposit(
      depositAmount: number | string | BN
    ): NonPayableTransactionObject<void>;

    getAccruedInterest(
      userAddress: string
    ): NonPayableTransactionObject<string>;

    getBlockNumber(): NonPayableTransactionObject<string>;

    implementation(): NonPayableTransactionObject<string>;

    initialize(
      _vrtAddress: string,
      _interestRatePerBlock: number | string | BN
    ): NonPayableTransactionObject<void>;

    interestRatePerBlock(): NonPayableTransactionObject<string>;

    pause(): NonPayableTransactionObject<void>;

    pendingAdmin(): NonPayableTransactionObject<string>;

    pendingImplementation(): NonPayableTransactionObject<string>;

    resume(): NonPayableTransactionObject<void>;

    userInfo(arg0: string): NonPayableTransactionObject<{
      userAddress: string;
      accrualStartBlockNumber: string;
      totalPrincipalAmount: string;
      lastWithdrawnBlockNumber: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    vaultPaused(): NonPayableTransactionObject<boolean>;

    vrt(): NonPayableTransactionObject<string>;

    withdraw(): NonPayableTransactionObject<void>;

    withdrawBep20(
      tokenAddress: string,
      receiver: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    AdminTransfered(cb?: Callback<AdminTransfered>): EventEmitter;
    AdminTransfered(
      options?: EventOptions,
      cb?: Callback<AdminTransfered>
    ): EventEmitter;

    Claim(cb?: Callback<Claim>): EventEmitter;
    Claim(options?: EventOptions, cb?: Callback<Claim>): EventEmitter;

    Deposit(cb?: Callback<Deposit>): EventEmitter;
    Deposit(options?: EventOptions, cb?: Callback<Deposit>): EventEmitter;

    VaultPaused(cb?: Callback<VaultPaused>): EventEmitter;
    VaultPaused(
      options?: EventOptions,
      cb?: Callback<VaultPaused>
    ): EventEmitter;

    VaultResumed(cb?: Callback<VaultResumed>): EventEmitter;
    VaultResumed(
      options?: EventOptions,
      cb?: Callback<VaultResumed>
    ): EventEmitter;

    Withdraw(cb?: Callback<Withdraw>): EventEmitter;
    Withdraw(options?: EventOptions, cb?: Callback<Withdraw>): EventEmitter;

    WithdrawToken(cb?: Callback<WithdrawToken>): EventEmitter;
    WithdrawToken(
      options?: EventOptions,
      cb?: Callback<WithdrawToken>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AdminTransfered", cb: Callback<AdminTransfered>): void;
  once(
    event: "AdminTransfered",
    options: EventOptions,
    cb: Callback<AdminTransfered>
  ): void;

  once(event: "Claim", cb: Callback<Claim>): void;
  once(event: "Claim", options: EventOptions, cb: Callback<Claim>): void;

  once(event: "Deposit", cb: Callback<Deposit>): void;
  once(event: "Deposit", options: EventOptions, cb: Callback<Deposit>): void;

  once(event: "VaultPaused", cb: Callback<VaultPaused>): void;
  once(
    event: "VaultPaused",
    options: EventOptions,
    cb: Callback<VaultPaused>
  ): void;

  once(event: "VaultResumed", cb: Callback<VaultResumed>): void;
  once(
    event: "VaultResumed",
    options: EventOptions,
    cb: Callback<VaultResumed>
  ): void;

  once(event: "Withdraw", cb: Callback<Withdraw>): void;
  once(event: "Withdraw", options: EventOptions, cb: Callback<Withdraw>): void;

  once(event: "WithdrawToken", cb: Callback<WithdrawToken>): void;
  once(
    event: "WithdrawToken",
    options: EventOptions,
    cb: Callback<WithdrawToken>
  ): void;
}
