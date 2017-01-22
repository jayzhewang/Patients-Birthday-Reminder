import React from 'react';
import { createStore } from 'redux';

const configureStore = (preloadedState = {}) => {
  return createStore(
    null,
    preloadedState,
    null
  );
};

export default configureStore;
