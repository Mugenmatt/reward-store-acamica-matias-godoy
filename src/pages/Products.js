import React, { useState } from 'react';
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

const Products = ({allProducts}) => {
  const [productList, setProductList] = useState(allProducts);
  const [pagination, setPagination] = useState(0);
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
    setProductList(lowestPrice);
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
    setProductList(highestPrice);
  };
  const handlePrevPage = () => {
    setPagination(0);
  };
  const handleNextPage = () => {
    setPagination(1);
  };
  return (
    <>
      <NavLink to={"/user/history"} activeClassName={{padding:'100px', backgroundColor: 'red'}} style={{textDecoration:'none'}}>
        <HistoryBtn>My History</HistoryBtn>
      </NavLink>
      <Filter
        handleLowestPrice={handleLowestPrice}
        handleHighestPrice={handleHighestPrice}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        pagination={pagination}
      />
      <hr style={{ border: '1px solid #d9d9d9' }} />;
      <ProductsBoxContainer>
        {pagination === 0 && allProducts
          .map((product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              name={product.name}
              category={product.category}
              cost={product.cost}
            />
          ))
          .slice(0, 16)}
          {pagination === 1 && allProducts
          .map((product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              name={product.name}
              category={product.category}
              cost={product.cost}
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
