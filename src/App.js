import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styled, { createGlobalStyle } from 'styled-components/macro';

import Header from './components/Header';

import Filter from './components/Filter';

import Products from './pages/Products';

import History from './pages/History'

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
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState(0);
  const handleLowestPrice = (e) => {
    const lowestPrice = productList.sort( (a, b) => {
      if(a.cost > b.cost) {
        return 1
      } else if(a.cost < b.cost) {
        return -1
      } else {
        return 0
      }
    })
    setProductList(lowestPrice);
  };
  const handleHighestPrice = (e) => {
    const highestPrice = productList.sort( (a, b) => {
      if(a.cost < b.cost) {
        return 1
      } else if(a.cost > b.cost) {
        return -1
      } else {
        return 0
      }
    })
    setProductList(highestPrice);
  };
  const handlePrevPage = () => {
    setPagination(0);
  };
  const handleNextPage = () => {
    setPagination(1);
  };
  useEffect(() => {
    fetch(`https://coding-challenge-api.aerolab.co/products`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI5NWY3YzhjYWIyMDAwMjBiODBiNTkiLCJpYXQiOjE2MDU5ODQxMjR9.RpQtGdkEPGoLmKYkPwyfdvufyT8wsFnVOkGrd9uJd0w',
      },
    })
      .then((res) => res.json())
      .then((productListData) => {
        const formattedProducts = productListData.map((product) => ({
          _id: product._id,
          category: product.category,
          cost: product.cost,
          img: product.img.hdUrl,
          name: product.name,
        }));
        setProductList(formattedProducts);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <CenterApp>
          <Header />
          <CenterPages>
            <main>
              <ProductQuantity pagination={pagination} />
              <Filter
                handleLowestPrice={handleLowestPrice}
                handleHighestPrice={handleHighestPrice}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
              <hr style={{ border: '1px solid #d9d9d9' }} />;
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Products allProducts={productList} pagination={pagination} />}
                />
                {/* MOSTRAR PRODUCTO ESPECIFICO */}
                {/* <Route exact path="/product/:_id" component={} /> */}
              </Switch>
              <ProductQuantity pagination={pagination} />
              <hr style={{ border: '1px solid #d9d9d9' }} />
            </main>
          </CenterPages>
        </CenterApp>
      </BrowserRouter>
    </div>
  );
};

export default App;
