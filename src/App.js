import React from 'react';

import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

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
}
`;

const CenterApp = styled.div`
  width: 86.4em;
  margin: 2% auto 5% auto;
`;

const CenterPages = styled.div`
  width: 82%;
  margin: auto;
`;

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <CenterApp>
          <Header />
          <CenterPages>
            <main>
              <Switch>
                <Route exact path="/" component={Products} />
                <Route exact path="/user/history" component={History} />
                {/* MOSTRAR PRODUCTO ESPECIFICO */}
                {/* <Route exact path="/product/:_id" component={} /> */}
                </Switch>
            </main>
          </CenterPages>
        </CenterApp>
      </BrowserRouter>
    </>
  );
};

export default App;
