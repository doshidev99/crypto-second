import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as actionConnect from 'redux/actions/connect';
import * as actionGetBalance from 'redux/actions/getBalance';
import getWeb3 from 'utils/getWeb3';

//contract
import AppFooter from 'components/AppFooter';
import AppHeader from 'components/AppHeader';
import Buy from 'pages/Buy';
import Home from 'pages/Home';
import AirDrop from 'pages/Airdrop';
import NotFound from 'pages/404';
import Coming from 'components/SelectionComming'
import { useDispatch } from "react-redux";
import './styles.css';


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then((res) => {
        if (res.length > 0) {
          dispatch({ type: 'CHECK_CONNECTED', connected: true })
        } else {
          dispatch({ type: 'CHECK_CONNECTED', connected: false })
        }
      });
    } else {
      alert('please install metamark');
    }
  }, [dispatch]);


  useEffect(() => {
    const getConnect = async () => {
      await getWeb3();
      await dispatch(actionConnect.web3Connect());
      await dispatch(actionGetBalance.getBlance());
    }
    getConnect();
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <AppHeader />

        <Switch>

          <Route
            path="/buy"
            component={() => (
              <Buy />
            )}
          />
          <Route exact
            path="/airdrop"
            component={() => (
              <AirDrop />
            )}
          />
          <Route exact
            path="/bank"
            component={() => (
              <Coming />
            )}
          />
          <Route exact
            path="/nft"
            component={() => (
              <Coming />
            )}
          />
          <Route exact
            path="/docs"
            component={() => (
              <Coming />
            )}
          />
          <Route
            path="/"
            exact
            component={() => (
              <Home />
            )}
          />
          <Route paht="*" component={NotFound} />

        </Switch>

        <AppFooter />

      </div>
    </Router>
  );
}
