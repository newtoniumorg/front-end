import React from 'react';

function Presale() {
  return (
    <div className="pre-sale">
      <h3>NEWTONIUM (NEWTON)</h3>
      <div className="presale-ann">
        <h4>PRE-SALE (LIVE NOW)</h4>
        <p>Total Pre-Sale: 444,000 NEWTON</p>
        <p>Hardcap: 277 ETH</p>
        <p>Min: 0.1 ETH</p>
        <p>Max: 5 ETH</p>
        <p style={{ lineBreak: 'anywhere' }}>
          Pre-sale OTC Address:{' '}
          <a
            href="https://etherscan.io/address/0xbec5F7994BfF50BED8eA2603C4DE4b740Ca152ef"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            0xbec5F7994BfF50BED8eA2603C4DE4b740Ca152ef
          </a>{' '}
          (only send ETH to this address to participate pre-sale)
        </p>

        <h4>1st round (6 hour: end at 21:00 UTC on August 21, 2020)</h4>
        <p>Supply: 111,000 NEWTON</p>
        <p>Price: 1 ETH = 2,000 NEWTON</p>
        <p>Hardcap: 55,5 ETH</p>

        <h4> 2nd round (12 hour: end at 09:00 UTC on August 22, 2020)</h4>
        <p>Supply: 333,000 NEWTON</p>
        <p>Price: 1 ETH = 1,500 NEWTON</p>
        <p>Hardcap: 222 ETH</p>

        <br />
        <p>
          Pre-sale token will be distributed after 1 day of Uniswap listing for
          1st pre-sale participants and after 2 days of Uniswap listing for 2nd
          pre-sale participants.
        </p>
      </div>
      <h4>INTRODUCTION</h4>
      <p>
        NEWTON makes DeFi more simple. Now people can trade, liquidate, swap,
        borrow, and insure DAI on NEWTON platform, simple and easy. NEWTON is
        designed to be a competitor of yearn finance (YFI) as today’s salient
        DeFi project.
      </p>

      <h4>ROADMAP (Q4 - 2020)</h4>
      <ul>
        <li>Deploy Smart Contract (DONE)</li>
        <li>Verify Smart Contract (DONE)</li>
        <li>Update token information on Etherscan (DONE)</li>
        <li>Apply to CoinGecko & CoinMarketCap (DONE)</li>
        <li>Pre-Sale Launch (on-going)</li>
        <li>Listing on Uniswap & CEXs (coming soon)</li>
        <li>Marketing campaign on youtube and twitter (coming soon)</li>
      </ul>

      <h4>TOKENOMICS</h4>
      <p>
        Ticker: <span>NEWTON</span>
      </p>
      <p style={{ lineBreak: 'anywhere' }}>
        Smart Contract: <span>0xAE9CBE6eBf72A51c9Fcea3830485614486318Fd4</span>
      </p>
      <p>
        Total Supply: <span> 999,000 NEWTON</span>
      </p>
      <p>
        Circulating Supply: <span>666,000 NEWTON</span>
      </p>
      <ul>
        <li> Pre-Sale: 444,000 NEWTON</li>
        <li>Uniswap liquidity: 222,000 NEWTON</li>
        <li>Foundation: 111,000 NEWTON (Locked & vested over a year)</li>
        <li>
          Audits & partnerships: 111,000 NEWTON (Locked & vested over a year)
        </li>
        <li>
          Research & development: 111,000 NEWTON (Locked & vested over a year)
        </li>
      </ul>
      <h4>NEWTON OFFICIAL WEBSITE</h4>
      <a href="https://newtonium.org">https://newtonium.org</a>
    </div>
  );
}

export default Presale;
