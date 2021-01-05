import React from 'react';
import styled from 'styled-components/macro';
import ProductCard from '../components/ProductCard';

const ProductsBoxContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 5%;
`;

const Products = ({allProducts, pagination}) => {
  return (
    <>
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
    </>
  );
};

export default Products;
