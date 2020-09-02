import React from 'react';

import logo from './assets/output.png';
import ether from './assets/ether.png';

function Unicash() {
  return (
    <div className="unicash">
      <div className="earn-content">
        <div className="connection">
          <img className="n-logo" src={logo} alt="newtonium-logo" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-switch-horizontal"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#9C27B0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="16 3 20 7 16 11" />
            <line x1="10" y1="7" x2="20" y2="7" />
            <polyline points="8 13 4 17 8 21" />
            <line x1="4" y1="17" x2="13" y2="17" />
          </svg>
          <img src={ether} alt="ether-logo" className="metamask ether" />
        </div>
        <a
          href="https://uniswap.info/token/0xae9cbe6ebf72a51c9fcea3830485614486318fd4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Buy on UNISWAP</button>
        </a>

        <h2>Uniswap Exchange</h2>
        <a
          href="https://www.unicrypt.network/uniswap-browser/pair/0x0f94d105556969c4b81F342b2513f568bcc7a424"
          target="_blank"
          rel="noopener noreferrer"
        >
          Liquidity Locked 100%
        </a>
      </div>
    </div>
  );
}

export default Unicash;
