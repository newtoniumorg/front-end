import React from 'react';
import { openMetaMask } from './reusable';
import logo from './assets/output.png';
function Vaults() {
  return (
    <div className="vaults">
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
          <img
            src="https://peerol.com/user/pages/03.MetaMask/metamask_logo_250x.png"
            alt="metamask-logo"
            className="metamask"
          />
        </div>
        {/* <button onClick={() => openMetaMask()}>Connect</button> */}
        <p>Coming Soon</p>
        <h2>Vaults</h2>
      </div>
    </div>
  );
}

export default Vaults;
