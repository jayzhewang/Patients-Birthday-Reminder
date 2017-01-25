export const RedirectConstants = {
  EXCHANGE_TOKENS: 'EXCHANGE_TOKENS',
  RECEIVE_TOKENS: 'RECEIVE_TOKENS'
};

export const exchangeTokens = data => ({
  type: RedirectConstants.EXCHANGE_TOKENS,
  data
});

export const receiveTokens = data => ({
  type: RedirectConstants.RECEIVE_TOKENS,
  data
});
