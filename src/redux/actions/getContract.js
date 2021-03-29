import PreSale from './contracts/preSale.json';
import AirDrop from './contracts/airdrop.json';

import { Contract } from 'config/contract'
//
export const PRESALE_CONTRACT = 'PRESALE_CONTRACT';

export const getContract = (payload) => async (dispatch, getState) => {
  const { w3Reducer } = getState();
  let web3 = w3Reducer.web3;

  let metaCoinAddress = Contract.preSale;

  const { currentBalance, account, currentRef } = payload;


  const convertBalance = Math.pow(10, 18) * currentBalance

  if (web3) {
    new web3.eth.Contract(PreSale, metaCoinAddress, {
      transactionConfirmationBlocks: 1
    })?.methods.buy(account, currentRef).send({ from: account, value: convertBalance.toString() }).then(res => console.log(res))
  }
};


export const getContractWithAirDrop = (payload) => async (dispatch, getState) => {
  const { w3Reducer } = getState();
  let web3 = w3Reducer.web3;

  let metaCoinAddress = Contract.airdrop;

  const { account } = payload;


  if (web3) {
    new web3.eth.Contract(AirDrop, metaCoinAddress, {
      transactionConfirmationBlocks: 1
    })?.methods.claimFennnec().send({ from: account }).then(res => console.log(res))

  }

};
