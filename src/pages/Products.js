import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import ProductCard from '../components/ProductCard';
import ProductQuantity from '../components/ProductQuantity';
import Filter from '../components/Filter';

const ProductsBoxContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 5%;
`;

const HistoryBtn = styled.p`
  text-decoration: none;
  color: #fff;
  font-size: 1.7em;
  width: 15%;
  display: block;
  text-align: center;
  margin-left: 74.4%;
  margin-top: 5%;
  background-color: #0ad4fa;
  padding: 10px 5px;
  border-radius: 10px;
  :hover {
    background-color: #0ac4fa;
    color: #fff;
    cursor: pointer;
  }
`;

const Products = (props) => {
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState(0);
  const { onRedeemUpdateUser, userPoints } = props;


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

  const handleLowestPrice = () => {
    const lowestPrice = productList.sort( (a, b) => {
      if(a.cost > b.cost) {
        return 1
      } else if(a.cost < b.cost) {
        return -1
      } else {
        return 0
      }
    })
    setProductList(lowestPrice.map(eachProduct => eachProduct));
  };

  const handleHighestPrice = () => {
    const highestPrice = productList.sort( (a, b) => {
      if(a.cost < b.cost) {
        return 1
      } else if(a.cost > b.cost) {
        return -1
      } else {
        return 0
      }
    })
    setProductList(highestPrice.map(eachProduct => eachProduct));
  };

  const handlePrevPage = () => {
    setPagination(0);
  };

  const handleNextPage = () => {
    setPagination(1);
  };


  const handleRedeemProducts = (id) => {
    fetch('https://coding-challenge-api.aerolab.co/redeem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI5NWY3YzhjYWIyMDAwMjBiODBiNTkiLCJpYXQiOjE2MDU5ODQxMjR9.RpQtGdkEPGoLmKYkPwyfdvufyT8wsFnVOkGrd9uJd0w',
      },
      body: `{"productId": "${id}"}`
    })
      .then((res) => res.json())
      .then((redeemProduct) => redeemProduct)
      .catch((error) => console.log('ERROR: ' + error));
  }

  return (
    <>
      <NavLink to={"/user/history"} style={{textDecoration:'none'}}>
        <HistoryBtn>My History</HistoryBtn>
      </NavLink>
      <Filter
        handleLowestPrice={handleLowestPrice}
        handleHighestPrice={handleHighestPrice}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        pagination={pagination}
      />
      <hr style={{ border: '1px solid #d9d9d9' }} />
      <ProductsBoxContainer>
        {pagination === 0 && productList
          .map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              img={product.img}
              name={product.name}
              category={product.category}
              cost={product.cost}
              handleRedeemProducts = {handleRedeemProducts}
              onRedeemUpdateUser = {onRedeemUpdateUser}
              userPoints={userPoints}
            />
          ))
          .slice(0, 16)}
          {pagination === 1 && productList
          .map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              img={product.img}
              name={product.name}
              category={product.category}
              cost={product.cost}
              handleRedeemProducts = {handleRedeemProducts}
              onRedeemUpdateUser = {onRedeemUpdateUser}
              userPoints={userPoints}
            />
          ))
          .slice(16, 32)}
      </ProductsBoxContainer>
      <ProductQuantity pagination={pagination} />
      <hr style={{ border: '1px solid #d9d9d9' }} />
    </>
  );
};

export default Products;
