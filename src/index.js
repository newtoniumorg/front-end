import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, StoreProvider, action } from 'easy-peasy';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

const walletStore = {
  address: '',
  balance: '',
  isConnected: '',
  addWallet: action((state, payload) => {
    state.address = payload.address;
    state.balance = payload.balance;
  }),
  setConnected: action((state, payload) => {
    return {
      ...state,
      isConnected: payload,
    };
  }),
};

const store = createStore(walletStore);

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
