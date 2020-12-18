import React, { useState } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import styled, { createGlobalStyle } from 'styled-components/macro';

import Header from './components/Header';

import Filter from './components/Filter';

import Products from './pages/Products';

import ProductQuantity from './components/ProductQuantity';

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
  const [products, setProducts] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <CenterApp>
          <Header />
          <CenterPages>
            <main>
              <ProductQuantity />
              <Filter />
              <hr style={{ border: '1px solid #d9d9d9' }} />
              <Route exact path="/" component={Products} />
              {/* MOSTRAR PRODUCTO ESPECIFICO */}
              {/* <Route exact path="/product/:_id" component={} /> */}
              {/* MOSTRAR HISTORIAL DE PRODUCTOS CANJEADOS */}
              {/* <Route path="/user/history" component={} /> */}
              <ProductQuantity />
              <hr style={{ border: '1px solid #d9d9d9' }} />
            </main>
          </CenterPages>
        </CenterApp>
      </BrowserRouter>
    </div>
  );
};

export default App;
