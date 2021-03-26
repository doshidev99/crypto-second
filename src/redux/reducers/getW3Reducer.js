import * as actions from 'redux/actions/connect';

const initialState = {
  web3: null,
  account: null,
  balance: null,
  metaCoin: null,
  isLoading: true,
  metaCoinApprove: {},
  metaFarmContract: null,
  saveWeb3: null,
  isApprove: true,
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
    default:
      return state;
  }
};

export default rootReducer;
