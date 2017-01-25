import { combineReducers } from 'redux';
import RedirectReducer from './redirect_reducer';

export default combineReducers({
  tokens: RedirectReducer
});
