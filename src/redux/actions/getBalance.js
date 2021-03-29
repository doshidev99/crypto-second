import getWeb3 from 'utils/getWeb3';

export const GET_BALANCE = 'GET_BALANCE';

export const getBlance = () => async (dispatch) => {
  const web3 = await getWeb3();

  const accounts = await web3?.eth?.getAccounts();

  if (accounts?.length > 0) {
    const balance = await web3.eth.getBalance(accounts[0]);

    dispatch({
      type: GET_BALANCE,
      web3,
      balance
    });
  } else {
    console.log('Account not found');
  }
};
