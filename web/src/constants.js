export const CONTRACT_ADDRESS = '<specify the contract address>';

export const PRODUCTION = true;

export const NETWORK_ID = PRODUCTION ? '1' : '3'; // 1 = mainnet, 3 = ropsten
export const NETWORK_NAME = PRODUCTION ? 'Mainnet' : 'Ropsten';
export const ETHERSCAN_URL = PRODUCTION ?
  'https://etherscan.io' :
  'https://ropsten.etherscan.io';
