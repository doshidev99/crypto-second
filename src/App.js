/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';

import './styles.css';

export default function App() {
  // const { isLoading } = useSelector((state) => state.w3Reducer);

  // useEffect(() => {
  //   if (window.ethereum) {
  //     window.ethereum.request({ method: 'eth_requestAccounts' }).then((res) => {
  //       if (res.length > 0) {
  //         setIsConnect(true);
  //       } else {
  //         setIsConnect(false);
  //       }
  //     });
  //   } else {
  //     alert('please install metamark');
  //   }
  // });

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/"
            component={() => (
              <Home />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
