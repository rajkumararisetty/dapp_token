import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import drizzle functions and contract artifacts
import {Drizzle, generateStore} from 'drizzle';
import {DrizzleContext} from 'drizzle-react';
import DappTokenSale from './contracts/DappTokenSale';
import DappToken from './contracts/DappToken';

const options = {
  contracts: [DappTokenSale, DappToken],
  web3: {
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545'
    }
  }
};

// Setup drizzle and drizzleStore
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <App />
  </DrizzleContext.Provider>,
  document.getElementById('root')
);
