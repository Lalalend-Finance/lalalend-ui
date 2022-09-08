import BigNumber from 'bignumber.js';
import { MutationObserverOptions, useMutation, useQuery } from 'react-query';

import fakeAddress from '__mocks__/models/address';
import { assetData } from '__mocks__/models/asset';
import proposals from '__mocks__/models/proposals';
import transactionReceipt from '__mocks__/models/transactionReceipt';
import voters from '__mocks__/models/voters';
import FunctionKey from 'constants/functionKey';

// Queries
export const getBlockNumber = jest.fn();
export const useGetBlockNumber = () => useQuery(FunctionKey.GET_BLOCK_NUMBER, getBlockNumber);

export const getSebTreasuryPercentage = jest.fn();
export const useGetSebTreasuryPercentage = () =>
  useQuery(FunctionKey.GET_SEB_TREASURY_PERCENTAGE, getSebTreasuryPercentage);

export const getAssetsInAccount = jest.fn();
export const useGetAssetsInAccount = () =>
  useQuery(FunctionKey.GET_ASSETS_IN_ACCOUNT, getAssetsInAccount);

export const getHypotheticalAccountLiquidity = jest.fn();

export const getMarkets = jest.fn();
export const useGetMarkets = () => useQuery(FunctionKey.GET_MARKETS, getMarkets);

export const getMarketHistory = jest.fn();
export const useGetMarketHistory = () => useQuery(FunctionKey.GET_MARKET_HISTORY, getMarketHistory);

export const getNTokenBalancesAll = jest.fn();
export const useGetNTokenBalancesAll = jest.fn(() =>
  useQuery(FunctionKey.GET_N_TOKEN_BALANCES_ALL, getNTokenBalancesAll),
);

export const getMintedSeb = jest.fn();
export const useGetMintedSeb = () => useQuery(FunctionKey.GET_MINTED_SEB, getMintedSeb);

export const getMintableSeb = jest.fn();
export const useGetMintableSeb = () => useQuery(FunctionKey.GET_MINTABLE_SEB, getMintableSeb);

export const getMiaReward = jest.fn();
export const useGetMiaReward = () => useQuery(FunctionKey.GET_MIA_REWARD, getMiaReward);

export const getNTokenBalanceOf = jest.fn();
export const useGetNTokenBalanceOf = () =>
  useQuery(FunctionKey.GET_N_TOKEN_BALANCE, getNTokenBalanceOf);

export const getNTokenBorrowBalance = jest.fn();
export const useGetNTokenBorrowBalance = () =>
  useQuery(FunctionKey.GET_N_TOKEN_BORROW_BALANCE, getNTokenBorrowBalance);

export const getAllowance = jest.fn();
export const useGetAllowance = () => useQuery(FunctionKey.GET_TOKEN_ALLOWANCE, getAllowance);

export const getBalanceOf = jest.fn();
export const useGetBalanceOf = () => useQuery(FunctionKey.GET_BALANCE_OF, getBalanceOf);

export const getVrtConversionEndTime = jest.fn();
export const useGetVrtConversionEndTime = () =>
  useQuery(FunctionKey.GET_VRT_CONVERSION_END_TIME, getVrtConversionEndTime);

export const getVrtConversionRatio = jest.fn();
export const useGetVrtConversionRatio = () =>
  useQuery(FunctionKey.GET_VRT_CONVERSION_RATIO, getVrtConversionRatio);

export const getMiaWithdrawableAmount = jest.fn();
export const useGetMiaWithdrawableAmount = () =>
  useQuery(FunctionKey.GET_MIA_WITHDRAWABLE_AMOUNT, getMiaWithdrawableAmount);

export const getNTokenCash = jest.fn();
export const useGetNTokenCash = () => useQuery(FunctionKey.GET_N_TOKEN_CASH, getNTokenCash);

export const getNTokenInterestRateModel = jest.fn();
export const useGetNTokenInterestRateModel = () =>
  useQuery(FunctionKey.GET_N_TOKEN_INTEREST_RATE_MODEL, getNTokenInterestRateModel);

export const getNTokenApySimulations = jest.fn();
export const useGetNTokenApySimulations = () =>
  useQuery(FunctionKey.GET_N_TOKEN_APY_SIMULATIONS, getNTokenApySimulations);

export const getNTokenSupplyRate = jest.fn();

export const getNTokenBorrowRate = jest.fn();

export const getMiaSebVaultDailyRate = jest.fn();
export const useGetMiaSebVaultDailyRate = () =>
  useQuery(FunctionKey.GET_MIA_SEB_VAULT_DAILY_RATE, getMiaSebVaultDailyRate);

export const getTransactions = jest.fn();
export const useGetTransactions = jest.fn(() =>
  useQuery([FunctionKey.GET_TRANSACTIONS, {}], getTransactions),
);

export const getMiaVaultPoolCount = jest.fn();
export const useGetMiaVaultPoolCount = () =>
  useQuery(FunctionKey.GET_MIA_VAULT_POOLS_COUNT, getMiaVaultPoolCount);

export const useGetTreasuryTotals = jest.fn();

export const useGetUserMarketInfo = jest.fn(() => ({
  isLoading: false,
  data: {
    assets: assetData,
  },
}));

export const getMiaVaultPoolInfo = jest.fn();
export const useGetMiaVaultPoolInfo = () =>
  useQuery(FunctionKey.GET_MIA_VAULT_POOL_INFOS, getMiaVaultPoolInfo);

export const getMiaVaultRewardPerBlock = jest.fn();
export const useGetMiaVaultRewardPerBlock = () =>
  useQuery(FunctionKey.GET_MIA_VAULT_REWARD_PER_BLOCK, getMiaVaultRewardPerBlock);

export const getMiaVaultTotalAllocationPoints = jest.fn();
export const useGetMiaVaultTotalAllocationPoints = () =>
  useQuery(FunctionKey.GET_MIA_VAULT_TOTAL_ALLOCATION_POINTS, getMiaVaultTotalAllocationPoints);

export const getMiaVaultLockedDeposits = jest.fn();
export const useGetMiaVaultLockedDeposits = () =>
  useQuery(FunctionKey.GET_MIA_VAULT_WITHDRAWAL_REQUESTS, getMiaVaultLockedDeposits);

export const getMiaVaultPendingReward = jest.fn();

export const getMiaVaultUserInfo = jest.fn();
export const useGetMiaVaultUserInfo = () =>
  useQuery(FunctionKey.GET_MIA_VAULT_USER_INFO, getMiaVaultUserInfo);

export const getCurrentVotes = jest.fn(() => new BigNumber(100000000000000000));
export const useGetCurrentVotes = () => useQuery(FunctionKey.GET_CURRENT_VOTES, getCurrentVotes);

export const getProposals = jest.fn();
export const useGetProposals = () => useQuery(FunctionKey.GET_PROPOSALS, getProposals);

export const getProposal = jest.fn(() => proposals[0]);
export const useGetProposal = () => useQuery(FunctionKey.GET_PROPOSAL, getProposal);

export const getDailyMia = jest.fn();
export const useGetDailyMia = () => useQuery(FunctionKey.GET_N_TOKEN_DAILY_MIA, getDailyMia);

export const getVoters = jest.fn(() => voters);
export const useGetVoters = jest.fn(() => useQuery(FunctionKey.GET_VOTERS, getVoters));

export const getVoterHistory = jest.fn();
export const useGetVoterHistory = () => useQuery(FunctionKey.GET_VOTER_HISTORY, getVoterHistory);

export const getVoterDetails = jest.fn();
export const useGetVoterDetails = () => useQuery(FunctionKey.GET_VOTER_DETAILS, getVoterDetails);

export const getVoteReceipt = jest.fn();
export const useGetVoteReceipt = () => useQuery(FunctionKey.GET_VOTE_RECEIPT, getVoteReceipt);

export const useGetVaults = jest.fn();

export const getSebVaultUserInfo = jest.fn();
export const useGetSebVaultUserInfo = () =>
  useQuery([FunctionKey.GET_SEB_VAULT_USER_INFO, fakeAddress], getSebVaultUserInfo);

export const getSebVaultPendingMia = jest.fn();
export const useGetSebVaultPendingMia = () =>
  useQuery([FunctionKey.GET_SEB_VAULT_PENDING_MIA, fakeAddress], getSebVaultPendingMia);

export const useGetVestingVaults = jest.fn();

export const getVoteDelegateAddress = jest.fn();
export const useGetVoteDelegateAddress = () =>
  useQuery([FunctionKey.GET_VOTE_DELEGATE_ADDRESS, fakeAddress], getVoteDelegateAddress);

export const getLatestProposalIdByProposer = jest.fn();
export const useGetLatestProposalIdByProposer = () =>
  useQuery(
    [FunctionKey.GET_LATEST_PROPOSAL_ID_BY_PROPOSER, fakeAddress],
    getLatestProposalIdByProposer,
  );
export const useGetActiveProposal = jest.fn();

export const getVrtVaultInterestRatePerBlock = jest.fn();
export const useGetVrtVaultInterestRatePerBlock = () =>
  useQuery(FunctionKey.GET_VRT_VAULT_INTEREST_RATE_PER_BLOCK, getVrtVaultInterestRatePerBlock);

export const getVrtVaultUserInfo = jest.fn();
export const useGetVrtVaultUserInfo = () =>
  useQuery([FunctionKey.GET_VRT_VAULT_USER_INFO, fakeAddress], getVrtVaultUserInfo);

export const getVrtVaultAccruedInterest = jest.fn();
export const useGetVrtVaultAccruedInterest = () =>
  useQuery([FunctionKey.GET_VRT_VAULT_ACCRUED_INTEREST, fakeAddress], getVrtVaultAccruedInterest);

export const getVoterAccounts = jest.fn();
export const useGetVoterAccounts = () => useQuery(FunctionKey.GET_VOTER_ACCOUNTS, getVoterAccounts);

export const getProposalThreshold = jest.fn(() => new BigNumber('10000000000000000000000'));
export const useGetProposalThreshold = () =>
  useQuery(FunctionKey.GET_PROPOSAL_THRESHOLD, getProposalThreshold);

export const getProposalState = jest.fn();
export const useGetProposalState = () => useQuery(FunctionKey.GET_PROPOSAL_STATE, getProposalState);

export const getProposalEta = jest.fn();
export const useGetProposalEta = () => useQuery(FunctionKey.GET_PROPOSAL_ETA, getProposalEta);

// Mutations
export const approveToken = jest.fn();
export const useApproveToken = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.APPROVE_TOKEN, approveToken, options);

export const approveVrt = jest.fn();
export const useApproveVrt = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.APPROVE_VRT, approveVrt, options);

export const convertVrt = jest.fn();
export const useConvertVrt = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CONVERT_VRT, approveVrt, options);

export const mintSeb = jest.fn();
export const useMintSeb = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.MINT_SEB, mintSeb, options);

export const repaySeb = jest.fn();
export const useRepaySeb = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.REPAY_SEB, repaySeb, options);

export const enterMarkets = jest.fn();
export const useEnterMarkets = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.ENTER_MARKETS, enterMarkets, options);

export const exitMarket = jest.fn();
export const useExitMarket = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.EXIT_MARKET, exitMarket, options);

export const claimMiaReward = jest.fn();
export const useClaimMiaReward = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CLAIM_MIA_REWARD, claimMiaReward, options);

export const claimSebVaultReward = jest.fn();
export const useClaimSebVaultReward = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CLAIM_SEB_VAULT_REWARD, claimSebVaultReward, options);

export const claimMiaVaultReward = jest.fn();
export const useClaimMiaVaultReward = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CLAIM_MIA_VAULT_REWARD, claimMiaVaultReward, options);

export const claimVrtVaultReward = jest.fn();
export const useClaimVrtVaultReward = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CLAIM_VRT_VAULT_REWARD, claimVrtVaultReward, options);

export const repayEVMOS = jest.fn();
export const useRepayEVMOS = () => useMutation(FunctionKey.REPAY_EVMOS, repayEVMOS);

export const repayNonEVMOSNToken = jest.fn();
export const useRepayNonEVMOSNToken = () =>
  useMutation(FunctionKey.REPAY_NON_EVMOS_N_TOKEN, repayNonEVMOSNToken);

export const useRepayNToken = useRepayNonEVMOSNToken;

export const supply = jest.fn();
export const useSupply = () => useMutation(FunctionKey.SUPPLY, supply);
export const supplyNonEVMOS = jest.fn();
export const useSupplyNonEVMOS = () => useMutation(FunctionKey.SUPPLY, supplyNonEVMOS);

export const supplyEVMOS = jest.fn();
export const useSupplyEVMOS = () => useMutation(FunctionKey.SUPPLY_EVMOS, supplyEVMOS);

export const redeem = jest.fn();
export const useRedeem = () => useMutation(FunctionKey.REDEEM, redeem);

export const redeemUnderlying = jest.fn();
export const useRedeemUnderlying = () => useMutation(FunctionKey.REDEEM, redeemUnderlying);

export const borrowNToken = jest.fn();
export const useBorrowNToken = () => useMutation(FunctionKey.BORROW_N_TOKEN, borrowNToken);

export const withdrawMia = jest.fn();
export const useWithdrawMia = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.WITHDRAW_MIA, approveVrt, options);

export const setVoteDelegate = jest.fn();
export const useSetVoteDelegate = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.SET_VOTE_DELEGATE, setVoteDelegate, options);

export const createProposal = jest.fn();
export const useCreateProposal = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CREATE_PROPOSAL, createProposal, options);

export const cancelProposal = jest.fn(async () => transactionReceipt);
export const useCancelProposal = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CANCEL_PROPOSAL, cancelProposal, options);

export const executeProposal = jest.fn(async () => transactionReceipt);
export const useExecuteProposal = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.EXECUTE_PROPOSAL, executeProposal, options);

export const queueProposal = jest.fn(async () => transactionReceipt);
export const useQueueProposal = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.QUEUE_PROPOSAL, queueProposal, options);

export const stakeInMiaVault = jest.fn();
export const useStakeInMiaVault = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.STAKE_IN_MIA_VAULT, stakeInMiaVault, options);

export const stakeInSebVault = jest.fn();
export const useStakeInSebVault = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.STAKE_IN_SEB_VAULT, stakeInSebVault, options);

export const stakeInVrtVault = jest.fn();
export const useStakeInVrtVault = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.STAKE_IN_VRT_VAULT, stakeInVrtVault, options);

export const castVote = jest.fn();
export const useCastVote = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CAST_VOTE, castVote, options);

export const castVoteWithReason = jest.fn();
export const useCastVoteWithReason = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CAST_VOTE_WITH_REASON, castVoteWithReason, options);

export const withdrawFromSebVault = jest.fn();
export const useWithdrawFromSebVault = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.WITHDRAW_FROM_SEB_VAULT, withdrawFromSebVault, options);

export const withdrawFromVrtVault = jest.fn();
export const useWithdrawFromVrtVault = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.WITHDRAW_FROM_VRT_VAULT, withdrawFromVrtVault, options);

export const requestWithdrawalFromMiaVault = jest.fn();
export const useRequestWithdrawalFromMiaVault = (options?: MutationObserverOptions) =>
  useMutation(
    FunctionKey.REQUEST_WITHDRAWAL_FROM_MIA_VAULT,
    requestWithdrawalFromMiaVault,
    options,
  );

export const executeWithdrawalFromMiaVault = jest.fn();
export const useExecuteWithdrawalFromMiaVault = (options?: MutationObserverOptions) =>
  useMutation(
    FunctionKey.EXECUTE_WITHDRAWAL_FROM_MIA_VAULT,
    executeWithdrawalFromMiaVault,
    options,
  );
