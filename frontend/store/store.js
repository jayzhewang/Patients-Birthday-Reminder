import React from 'react';
import { createStore } from 'redux';
import RootMiddleware from '../middlewares/root_middleware';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  );
};

export default configureStore;
