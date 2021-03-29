import { formatBlance } from 'utils/reMath';

import * as actions from 'redux/actions/connect';
import * as actionsGetBalance from 'redux/actions/getBalance';

const initialState = {
  web3: null,
  account: null,
  balance: null,
  isLoading: true,
  metaCoinApprove: {},
  metaFarmContract: null,
  saveWeb3: null,
  isApprove: true,
  isConnected: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.WEB3_CONNECT:
      return {
        ...state,
        isLoading: false,
        web3: action.web3,
        account: action.account,
      };
    case actionsGetBalance.GET_BALANCE:
      return {
        ...state,
        isLoading: false,
        balance: +formatBlance(action.balance),
      };

    case 'CHECK_CONNECTED':
      return {
        ...state,
        isConnected: action.connected
      };

    default:
      return state;
  }
};

export default rootReducer;
