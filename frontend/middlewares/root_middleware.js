import { applyMiddleware } from 'redux';
import RedirectMiddleware from './redirect_middleware';

export default applyMiddleware(
  RedirectMiddleware
);
