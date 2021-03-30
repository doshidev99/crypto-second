import getWeb3 from 'utils/getWeb3';


import { NETWORK } from '../../rootConstants'

export const WEB3_CONNECT = 'WEB3_CONNECT';

export const web3Connect = () => async (dispatch) => {
	const web3 = await getWeb3();

	const accounts = await web3?.eth?.getAccounts();
	const currentNetWork = web3?.currentProvider?.networkVersion

	console.log(currentNetWork)
	// eslint-disable-next-line no-console
	if (currentNetWork !== NETWORK) {
		alert('Unknown network, please change network to BSC Mainnet');
		return;
	}

	if (accounts.length > 0) {
		const account = accounts[0];
		// let balance = await web3.eth.getBalance(account);
		dispatch({
			type: WEB3_CONNECT,
			web3,
			account
		});
	} else {
		console.log('Account not found');
	}
};
