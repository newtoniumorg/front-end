import React from 'react';
import { NavLink } from 'react-router-dom';

// import CountDown from './CountDown';

import logo from './assets/output.png';

function Home() {
  return (
    <div className="home">
      <div className="parent-home">
        <img className="newtonium-logo" src={logo} alt="newtonium-defi-token" />
        <h2 className="tick">NEWTONIUM (NEWTON)</h2>
        <a
          className="smart-contract"
          href="https://etherscan.io/token/0xAE9CBE6eBf72A51c9Fcea3830485614486318Fd4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Smart Contract: 0xAE9CBE6eBf72A51c9Fcea3830485614486318Fd4</p>
        </a>
        <div className="home-content">
          <NavLink className="link-menu" to="/earn">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-coin"
                width="150"
                height="150"
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
              <h1>EARN</h1>
            </div>
          </NavLink>

          <NavLink className="link-menu" to="zap">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-framer"
                width="150"
                height="150"
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
              <h1>ZAP</h1>
            </div>
          </NavLink>

          <NavLink className="link-menu" to="vaults">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chart-pie"
                width="150"
                height="150"
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
              <h1>VAULTS</h1>
            </div>
          </NavLink>

          <NavLink className="link-menu" to="uniswap">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-wallet"
                width="150"
                height="150"
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
              <h1>UNISWAP</h1>
            </div>
          </NavLink>
        </div>

        {/* <CountDown />
        <NavLink className="more-info" to="/presale">
          How to Participate
        </NavLink> */}
        <div className="social">
          <a
            href="https://twitter.com/newtonium_org"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-twitter"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#9E9E9E"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
            </svg>
          </a>

          <a
            href="https://github.com/newtoniumorg"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#9E9E9E"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21a4.192 4.192 0 0 0 -.08 -3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 0 0 4 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg>
          </a>
          <a href="mailto:dev@newtonium.org">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#9E9E9E"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </a>
          <a
            href="https://t.me/newtonium"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-telegram"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9E9E9E"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
          </a>
          <a
            href="https://medium.com/@dev_17683"
            rel="noreferrer noopener"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-medium"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9E9E9E"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M8 9h1l3 3l3 -3h1" />
              <line x1="8" y1="15" x2="10" y2="15" />
              <line x1="14" y1="15" x2="16" y2="15" />
              <line x1="9" y1="9" x2="9" y2="15" />
              <line x1="15" y1="9" x2="15" y2="15" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
