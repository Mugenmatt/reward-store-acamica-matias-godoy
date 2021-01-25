import React from 'react';
import styled from 'styled-components/macro';

const ProductQuantityWords = styled.p`
  font-size: 1.3em;
  font-weight: 400;
  display: inline-block;
  margin: 3% auto 0 auto;
  color: #616161;
  @media (max-width:1000px) {
    display: block;
    text-align: center;
    margin: 8% 0 2% 0;
  }
  @media (max-width:700px) {
    margin-bottom: 5%;
  }
`;

const ProductQuantity = (props) => {
  const { pagination } = props
  return (
    <ProductQuantityWords> {pagination === 0 ? '00-16' : '16-32'} of 32 products </ProductQuantityWords>
  )
};

export default ProductQuantity;
