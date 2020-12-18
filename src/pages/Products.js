import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import ProductCard from '../components/ProductCard';

const ProductsBoxContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 5%;
`;

const Products = () => {
  const [productList, setProductList] = useState([]);
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
        console.log(productListData);
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
    <ProductsBoxContainer>
      {productList
        .map((product) => (
          <ProductCard
            img={product.img}
            name={product.name}
            category={product.category}
            cost={product.cost}
          />
        ))
        .slice(0, 16)}
    </ProductsBoxContainer>
  );
};

export default Products;
