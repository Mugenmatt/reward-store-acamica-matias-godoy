import React, {useState, useEffect} from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styled, { createGlobalStyle } from 'styled-components/macro';

import Header from './components/Header';

import Products from './pages/Products';

import History from './pages/History'

const GlobalStyles = createGlobalStyle`
body {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  @media (max-width:700px) {
    background-color: #0ad4fa;
  }
}
`;

const CenterApp = styled.div`
  width: 86.4em;
  margin: 2% auto 5% auto;
  @media (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width:700px) {
    background-color: #fff;
    border-radius: 20px;
  }
`;

const CenterPages = styled.div`
  width: 82%;
  margin: auto;
`;

const App = () => {

  const [updateUser, setUpdateUser] = useState(false)
  const [userPoints, setUserPoints] = useState()

  const onRedeemUpdateUser = (boolean) => {
      setUpdateUser(boolean)
  }

  useEffect(() => {
    fetch(`https://coding-challenge-api.aerolab.co/user/me`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI5NWY3YzhjYWIyMDAwMjBiODBiNTkiLCJpYXQiOjE2MDU5ODQxMjR9.RpQtGdkEPGoLmKYkPwyfdvufyT8wsFnVOkGrd9uJd0w',
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setUserPoints(userData.points);
        })
        .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
        <BrowserRouter>
          <GlobalStyles />
          <CenterApp>
            <Header updateUser={updateUser} onRedeemUpdateUser={onRedeemUpdateUser} />
            <CenterPages>
              <main>
                <Switch>
                  <Route exact path="/reward-store-acamica-matias-godoy/">
                    <Products onRedeemUpdateUser={onRedeemUpdateUser} userPoints={userPoints} />
                  </Route>
                  <Route exact path="/reward-store-acamica-matias-godoy/user/history" component={History} />
                  </Switch>
              </main>
            </CenterPages>
          </CenterApp>
        </BrowserRouter>
    </>
  );
};

export default App;
