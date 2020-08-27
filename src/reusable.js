export function openMetaMask() {
  if (typeof window.ethereum === 'undefined') {
    console.log('Please install MetaMask first!');
    return;
  }
  if (typeof window.ethereum !== 'undefined') {
    window.ethereum.request({ method: 'eth_requestAccounts' });
  }
}
