import React, { useState, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { toast } from 'react-toastify';
import firebase from './firebase';

// import Web3 from 'web3';

// import { abi } from './abi';
import logo from './assets/output.png';

const CONTRACT = '0xAE9CBE6eBf72A51c9Fcea3830485614486318Fd4';

function Earn() {
  const wallet = useStoreState((state) => state);
  const addWalletInfo = useStoreActions((actions) => actions.addWallet);
  const [seed, setSeed] = useState(null);
  const [reward, setReward] = useState(0);
  const [loadingClaim, setLoadingClaim] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (wallet.address) {
      firebase
        .firestore()
        .collection('newtonian')
        .doc(wallet.address)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setSeed(doc.data().balance);
          } else {
            setSeed(null);
          }
        });
    }
  }, [wallet]);

  const openMetaMask = () => {
    if (typeof window.ethereum === 'undefined') {
      console.log('Please install MetaMask first!');
      return;
    }
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(() => {
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
                balance: data.result,
              });
              // console.log(data);
            });
        });
      });
    }
  };

  const stakeAsset = async () => {
    if (seed < 1) {
      return;
    }
    setIsDisabled(true);
    setLoadingClaim(true);
    firebase
      .firestore()
      .collection('newtonian')
      .doc(wallet.address)
      .get()
      .then((btn) => {
        if (btn.exists) {
          if (btn.data().isClicked) {
            return;
          } else {
            setLoadingClaim(true);
            if (!isDisabled) {
              fetch('https://newtonium.herokuapp.com/', {
                method: 'POST',
                cache: 'no-store',
                body: JSON.stringify({
                  address: wallet.address,
                }),
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then((result) => {
                  return result.json();
                })
                .then((data) => {
                  //console.log(data);
                  if (data.error) {
                    toast.error(
                      'Transaction failed, might be too liitle planted seed :('
                    );
                    setIsDisabled(false);
                    setLoadingClaim(false);
                    return;
                  }
                  if (!data.isHarvestDay) {
                    toast.error('This is not a harvest day, grow the apples!');
                    setIsDisabled(false);
                    return;
                  }
                  firebase
                    .firestore()
                    .collection('newtonian')
                    .doc(wallet.address)
                    .get()
                    .then((doc) => {
                      // console.log(doc.data());
                      if (doc.exists) {
                        setSeed(doc.data().balance);
                        setIsDisabled(false);
                        setLoadingClaim(false);
                        setReward(0);

                        toast.success('Apple have been harvested');
                      } else {
                        setSeed(null);
                      }
                    });
                })
                .catch((err) => setLoadingClaim(false));
            }
          }
        }
      });
  };

  // console.log(Web3.utils.toWei('999000000000000000000000'));
  // console.log(wallet.balance);
  return (
    <div className="earn">
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

        <button className="btn-connect" onClick={openMetaMask}>
          Connect
        </button>

        <h2>Earn Interest</h2>
        {wallet.address && (
          <input
            type="number"
            className="liq-input"
            placeholder="Calculate liquidity"
            onChange={(e) => {
              if (seed) {
                const applesTotal = e.target.value / 10;
                const seedClean = seed.split('.')[0];
                const seedDivide = seedClean.split(',');
                const seedTotal =
                  seedDivide.length > 1
                    ? seedDivide[0] + seedDivide[1]
                    : seedDivide[0];
                const supply = 999000;
                const rewardAmount = (applesTotal / supply) * Number(seedTotal);

                setReward(rewardAmount.toFixed(3));
              }
            }}
          />
        )}

        {wallet.address && (
          <div className="connected-info">
            <p>
              Wallet: {wallet.address.split('').filter((item, idx) => idx < 7)}
              ...
              {wallet.address.split('').filter((item, idx) => idx > 37)}
            </p>
            {/* <p>Balance: {wallet.balance === '0' ? 0 : wallet.balance} NEWTON</p> */}
            <p>Planted Seeds: {seed ? seed : '0'} NEWTON</p>
            <p>Apple Growth: {reward} Apples</p>
            {loadingClaim && <p>Harvesting some apples...</p>}
            <div>
              <button
                disabled={isDisabled}
                className="btn-stake"
                onClick={stakeAsset}
              >
                CLAIM
              </button>
            </div>
          </div>
        )}
        <br />
        {wallet.address && (
          <>
            <p>We are currently applying for uniswap API key.</p>
            <p>
              Once we get the API key, amount of apple will be shown by default.
            </p>
            <p>
              For now, just fill in the Liquidity amount to calculate and see
              your apples.
            </p>
            <p>
              On harvest day, we'll calculate your apples from our server based
              on Claim Wallet.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Earn;
