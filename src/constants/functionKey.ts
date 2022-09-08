enum FunctionKey {
  // Queries
  GET_BLOCK_NUMBER = 'GET_BLOCK_NUMBER',
  GET_SEB_TREASURY_PERCENTAGE = 'GET_SEB_TREASURY_PERCENTAGE',
  GET_MARKETS = 'GET_MARKETS',
  GET_MARKET_HISTORY = 'GET_MARKET_HISTORY',
  GET_ASSETS_IN_ACCOUNT = 'GET_ASSETS_IN_ACCOUNT',
  GET_MIA_ACCRUED = 'GET_MIA_ACCRUED',
  GET_MIA_SEB_STATE = 'GET_MIA_SEB_STATE',
  GET_MINTED_SEB = 'GET_MINTED_SEB',
  GET_MIA_REWARD = 'GET_MIA_REWARD',
  GET_TOKEN_ALLOWANCE = 'GET_TOKEN_ALLOWANCE',
  GET_BALANCE_OF = 'GET_BALANCE_OF',
  GET_MINTABLE_SEB = 'GET_MINTABLE_SEB',
  GET_VRT_CONVERSION_END_TIME = 'GET_VRT_CONVERSION_END_TIME',
  GET_VRT_CONVERSION_RATIO = 'GET_VRT_CONVERSION_RATIO',
  GET_MIA_WITHDRAWABLE_AMOUNT = 'GET_MIA_WITHDRAWABLE_AMOUNT',
  GET_MIA_SEB_VAULT_DAILY_RATE = 'GET_MIA_SEB_VAULT_DAILY_RATE',
  GET_MIA_SEB_VAULT_RATE = 'GET_MIA_SEB_VAULT_RATE',
  GET_N_TOKEN_CASH = 'GET_N_TOKEN_CASH',
  GET_N_TOKEN_BORROW_BALANCE = 'GET_N_TOKEN_BORROW_BALANCE',
  GET_N_TOKEN_BALANCE = 'GET_N_TOKEN_BALANCE',
  GET_N_TOKEN_BALANCES_ALL = 'GET_N_TOKEN_BALANCES_ALL',
  GET_N_TOKEN_DAILY_MIA = 'GET_N_TOKEN_DAILY_MIA',
  GET_N_TOKEN_INTEREST_RATE_MODEL = 'GET_N_TOKEN_INTEREST_RATE_MODEL',
  GET_N_TOKEN_APY_SIMULATIONS = 'GET_N_TOKEN_APY_SIMULATIONS',
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  GET_MIA_VAULT_REWARD_PER_BLOCK = 'GET_MIA_VAULT_REWARD_PER_BLOCK',
  GET_MIA_VAULT_TOTAL_ALLOCATION_POINTS = 'GET_MIA_VAULT_TOTAL_ALLOCATION_POINTS',
  GET_MIA_VAULT_POOL_INFOS = 'GET_MIA_VAULT_POOL_INFOS',
  GET_MIA_VAULT_PENDING_REWARD = 'GET_MIA_VAULT_PENDING_REWARD',
  GET_MIA_VAULT_USER_INFO = 'GET_MIA_VAULT_USER_INFO',
  GET_MIA_VAULT_POOLS_COUNT = 'GET_MIA_VAULT_POOLS_COUNT',
  GET_MIA_VAULT_WITHDRAWAL_REQUESTS = 'GET_MIA_VAULT_WITHDRAWAL_REQUESTS',
  GET_CURRENT_VOTES = 'GET_CURRENT_VOTES',
  GET_VOTERS = 'GET_VOTERS',
  GET_PENDING_MIA = 'GET_PENDING_MIA',
  GET_PROPOSALS = 'GET_PROPOSALS',
  GET_PROPOSAL = 'GET_PROPOSAL',
  GET_VOTE_RECEIPT = 'GET_VOTE_RECEIPT',
  GET_SEB_VAULT_USER_INFO = 'GET_SEB_VAULT_USER_INFO',
  GET_VOTE_DELEGATE_ADDRESS = 'GET_VOTE_DELEGATE_ADDRESS',
  GET_PROPOSAL_STATE = 'GET_PROPOSAL_STATE',
  GET_LATEST_PROPOSAL_ID_BY_PROPOSER = 'GET_LATEST_PROPOSAL_ID_BY_PROPOSER',
  GET_SEB_VAULT_PENDING_MIA = 'GET_SEB_VAULT_PENDING_MIA',
  GET_VRT_VAULT_INTEREST_RATE_PER_BLOCK = 'GET_VRT_VAULT_INTEREST_RATE_PER_BLOCK',
  GET_VRT_VAULT_USER_INFO = 'GET_VRT_VAULT_USER_INFO',
  GET_VRT_VAULT_ACCRUED_INTEREST = 'GET_VRT_VAULT_ACCRUED_INTEREST',
  GET_VOTER_ACCOUNTS = 'GET_VOTER_ACCOUNTS',
  GET_VOTER_DETAILS = 'GET_VOTER_DETAILS',
  GET_VOTER_HISTORY = 'GET_VOTER_HISTORY',
  GET_PROPOSAL_THRESHOLD = 'GET_PROPOSAL_THRESHOLD',
  GET_PROPOSAL_ETA = 'GET_PROPOSAL_ETA',

  // Mutations
  MINT_SEB = 'MINT_SEB',
  ENTER_MARKETS = 'ENTER_MARKETS',
  EXIT_MARKET = 'EXIT_MARKET',
  REPAY_SEB = 'REPAY_SEB',
  APPROVE_TOKEN = 'APPROVE_TOKEN',
  APPROVE_VRT = 'APPROVE_VRT',
  CONVERT_VRT = 'CONVERT_VRT',
  SUPPLY = 'SUPPLY',
  SUPPLY_EVMOS = 'SUPPLY_EVMOS',
  REDEEM = 'REDEEM',
  REDEEM_UNDERLYING = 'REDEEM_UNDERLYING',
  CLAIM_MIA_REWARD = 'CLAIM_MIA_REWARD',
  REPAY_NON_EVMOS_N_TOKEN = 'REPAY_NON_EVMOS_N_TOKEN',
  REPAY_EVMOS = 'REPAY_EVMOS',
  BORROW_N_TOKEN = 'BORROW_N_TOKEN',
  WITHDRAW_MIA = 'WITHDRAW_MIA',
  CREATE_PROPOSAL = 'CREATE_PROPOSAL',
  EXECUTE_PROPOSAL = 'EXECUTE_PROPOSAL',
  QUEUE_PROPOSAL = 'QUEUE_PROPOSAL',
  CANCEL_PROPOSAL = 'CANCEL_PROPOSAL',
  SET_VOTE_DELEGATE = 'SET_VOTE_DELEGATE',
  CLAIM_SEB_VAULT_REWARD = 'CLAIM_SEB_VAULT_REWARD',
  CLAIM_VRT_VAULT_REWARD = 'CLAIM_VRT_VAULT_REWARD',
  CLAIM_MIA_VAULT_REWARD = 'CLAIM_MIA_VAULT_REWARD',
  CAST_VOTE = 'CAST_VOTE',
  CAST_VOTE_WITH_REASON = 'CAST_VOTE_WITH_REASON',
  STAKE_IN_MIA_VAULT = 'STAKE_IN_MIA_VAULT',
  STAKE_IN_SEB_VAULT = 'STAKE_IN_SEB_VAULT',
  STAKE_IN_VRT_VAULT = 'STAKE_IN_VRT_VAULT',
  WITHDRAW_FROM_SEB_VAULT = 'WITHDRAW_FROM_SEB_VAULT',
  WITHDRAW_FROM_VRT_VAULT = 'WITHDRAW_FROM_VRT_VAULT',
  REQUEST_WITHDRAWAL_FROM_MIA_VAULT = 'REQUEST_WITHDRAWAL_FROM_MIA_VAULT',
  EXECUTE_WITHDRAWAL_FROM_MIA_VAULT = 'EXECUTE_WITHDRAWAL_FROM_MIA_VAULT',
}

export default FunctionKey;