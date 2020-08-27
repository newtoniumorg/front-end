import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';
import { ToastContainer } from 'react-toastify';
import Web3 from 'web3';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import Earn from './Earn';
import Zap from './Zap';
import Vaults from './Vaults';
import Unicash from './Unicash';
// import Presale from './Presale';
import TicToc from './TicToc';

import logo from './assets/logo.png';

import './App.scss';

const CONTRACT = '0xAE9CBE6eBf72A51c9Fcea3830485614486318Fd4';

function App() {
  const addWalletInfo = useStoreActions((actions) => actions.addWallet);
  const setConnected = useStoreActions((actions) => actions.setConnected);

  if (typeof window.ethereum !== 'undefined') {
    if (window.ethereum.isConnected()) {
      setConnected(true);
    } else {
      setConnected(false);
    }
    window.ethereum.on('disconnect', (accounts) => {
      addWalletInfo({
        address: '',
        balance: '',
      });
      setConnected(false);
    });
    window.ethereum.on('connect', (accounts) => {
      fetch(
        `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${CONTRACT}&address=${accounts[0]}&tag=latest&apikey=GIQTTZRWDGFQXI9P22U5ADXPIIMKNDX6FH`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          addWalletInfo({
            address: accounts[0],
            balance: Web3.utils.fromWei(data.result, 'ether'),
          });
          setConnected(true);
        });
    });
    window.ethereum.on('accountsChanged', (accounts) => {
      fetch(
        `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${CONTRACT}&address=${accounts[0]}&tag=latest&apikey=GIQTTZRWDGFQXI9P22U5ADXPIIMKNDX6FH`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          addWalletInfo({
            address: accounts[0],
            balance: Web3.utils.fromWei(data.result, 'ether'),
          });
          setConnected(true);
        });
    });
    window.ethereum.request({ method: 'eth_accounts' }).then((addr) => {
      fetch(
        `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${CONTRACT}&address=${addr}&tag=latest&apikey=GIQTTZRWDGFQXI9P22U5ADXPIIMKNDX6FH`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          addWalletInfo({
            address: addr[0],
            balance: data.result ? 0 : Web3.utils.fromWei(data.result, 'ether'),
          });
          setConnected(true);
        });
    });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="menu">
          <Link to="/">
            <img className="logo-menu" src={logo} alt="newtonium-logo" />
          </Link>
          <NavLink className="link-menu" to="/earn">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-coin"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#E91E63"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                <path d="M12 6v2m0 8v2" />
              </svg>
            </div>
          </NavLink>
          <NavLink className="link-menu" to="zap">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-framer"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#E91E63"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" />
              </svg>
            </div>
          </NavLink>
          <NavLink className="link-menu" to="vaults">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chart-pie"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#E91E63"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
                <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
              </svg>
            </div>
          </NavLink>

          <NavLink className="link-menu" to="uniswap">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-wallet"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#E91E63"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
              </svg>
            </div>
          </NavLink>
          {/* <NavLink className="link-menu" to="presale">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-alert-circle"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#9E9E9E"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
          </NavLink> */}
        </div>

        <Route exact path="/" component={Home} />
        <Route exact path="/earn" component={Earn} />
        <Route exact path="/zap" component={Zap} />
        <Route exact path="/vaults" component={Vaults} />
        <Route exact path="/uniswap" component={Unicash} />
        <Route exact path="/what-is-coming" component={TicToc} />
        {/* <Route exact path="/presale" component={Presale} /> */}
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
