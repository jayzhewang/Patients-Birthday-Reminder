import { RedirectConstants } from '../actions/redirect_actions';
import merge from 'lodash/merge';

const RedirectReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RedirectConstants.RECEIVE_TOKENS:
      const tokens = action.data;
      return merge({}, state, tokens);
    default:
      return state;
  }
};

export default RedirectReducer;
