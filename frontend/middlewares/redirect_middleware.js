import { RedirectConstants,
         receiveTokens } from '../actions/redirect_actions';
import { fetchTokens } from '../utils/redirect_api_utils';

const RedirectMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case RedirectConstants.EXCHANGE_TOKENS:
      const success = data => dispatch(receiveTokens(data));
      const data = action.data;
      fetchTokens(data, success);
      return next(action);
    default:
      return next(action);
  }
};

export default RedirectMiddleware;
