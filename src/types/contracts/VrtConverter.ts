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

export type ConversionInfoSet = ContractEventLog<{
  conversionRatio: string;
  conversionStartTime: string;
  conversionPeriod: string;
  conversionEndTime: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type NewAdmin = ContractEventLog<{
  oldAdmin: string;
  newAdmin: string;
  0: string;
  1: string;
}>;
export type NewPendingAdmin = ContractEventLog<{
  oldPendingAdmin: string;
  newPendingAdmin: string;
  0: string;
  1: string;
}>;
export type TokenConverted = ContractEventLog<{
  reedeemer: string;
  vrtAddress: string;
  vrtAmount: string;
  miaAddress: string;
  miaAmount: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type TokenWithdraw = ContractEventLog<{
  token: string;
  to: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type MIAVestingSet = ContractEventLog<{
  miaVestingAddress: string;
  0: string;
}>;

export interface VrtConverter extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): VrtConverter;
  clone(): VrtConverter;
  methods: {
    DEAD_ADDRESS(): NonPayableTransactionObject<string>;

    _acceptAdmin(): NonPayableTransactionObject<void>;

    _setPendingAdmin(
      newPendingAdmin: string
    ): NonPayableTransactionObject<void>;

    _setMIAVesting(
      _miaVestingAddress: string
    ): NonPayableTransactionObject<void>;

    admin(): NonPayableTransactionObject<string>;

    conversionEndTime(): NonPayableTransactionObject<string>;

    conversionPeriod(): NonPayableTransactionObject<string>;

    conversionRatio(): NonPayableTransactionObject<string>;

    conversionStartTime(): NonPayableTransactionObject<string>;

    convert(vrtAmount: number | string | BN): NonPayableTransactionObject<void>;

    isConversionActive(): NonPayableTransactionObject<boolean>;

    lastDayUpdated(): NonPayableTransactionObject<string>;

    pendingAdmin(): NonPayableTransactionObject<string>;

    totalVrtConverted(): NonPayableTransactionObject<string>;

    vrt(): NonPayableTransactionObject<string>;

    vrtDecimalsMultiplier(): NonPayableTransactionObject<string>;

    mia(): NonPayableTransactionObject<string>;

    miaDecimalsMultiplier(): NonPayableTransactionObject<string>;

    miaVesting(): NonPayableTransactionObject<string>;
  };
  events: {
    ConversionInfoSet(cb?: Callback<ConversionInfoSet>): EventEmitter;
    ConversionInfoSet(
      options?: EventOptions,
      cb?: Callback<ConversionInfoSet>
    ): EventEmitter;

    NewAdmin(cb?: Callback<NewAdmin>): EventEmitter;
    NewAdmin(options?: EventOptions, cb?: Callback<NewAdmin>): EventEmitter;

    NewPendingAdmin(cb?: Callback<NewPendingAdmin>): EventEmitter;
    NewPendingAdmin(
      options?: EventOptions,
      cb?: Callback<NewPendingAdmin>
    ): EventEmitter;

    TokenConverted(cb?: Callback<TokenConverted>): EventEmitter;
    TokenConverted(
      options?: EventOptions,
      cb?: Callback<TokenConverted>
    ): EventEmitter;

    TokenWithdraw(cb?: Callback<TokenWithdraw>): EventEmitter;
    TokenWithdraw(
      options?: EventOptions,
      cb?: Callback<TokenWithdraw>
    ): EventEmitter;

    MIAVestingSet(cb?: Callback<MIAVestingSet>): EventEmitter;
    MIAVestingSet(
      options?: EventOptions,
      cb?: Callback<MIAVestingSet>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "ConversionInfoSet", cb: Callback<ConversionInfoSet>): void;
  once(
    event: "ConversionInfoSet",
    options: EventOptions,
    cb: Callback<ConversionInfoSet>
  ): void;

  once(event: "NewAdmin", cb: Callback<NewAdmin>): void;
  once(event: "NewAdmin", options: EventOptions, cb: Callback<NewAdmin>): void;

  once(event: "NewPendingAdmin", cb: Callback<NewPendingAdmin>): void;
  once(
    event: "NewPendingAdmin",
    options: EventOptions,
    cb: Callback<NewPendingAdmin>
  ): void;

  once(event: "TokenConverted", cb: Callback<TokenConverted>): void;
  once(
    event: "TokenConverted",
    options: EventOptions,
    cb: Callback<TokenConverted>
  ): void;

  once(event: "TokenWithdraw", cb: Callback<TokenWithdraw>): void;
  once(
    event: "TokenWithdraw",
    options: EventOptions,
    cb: Callback<TokenWithdraw>
  ): void;

  once(event: "MIAVestingSet", cb: Callback<MIAVestingSet>): void;
  once(
    event: "MIAVestingSet",
    options: EventOptions,
    cb: Callback<MIAVestingSet>
  ): void;
}