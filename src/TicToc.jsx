import React from 'react';
import { NavLink } from 'react-router-dom';

import CountDown from './CountDown';

function TicToc() {
  return (
    <div className="tic-toc">
      <div className="tic-container">
        <NavLink style={{ fontWeight: 'bold' }} to="/">
          HOME
        </NavLink>
        <CountDown />
      </div>
    </div>
  );
}

export default TicToc;
