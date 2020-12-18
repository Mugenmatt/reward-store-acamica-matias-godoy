import React from 'react';
import styled from 'styled-components/macro';

const ProductQuantityWords = styled.p`
  font-size: 1.3em;
  font-weight: 400;
  display: inline-block;
  margin: 7% auto 0 auto;
  color: #616161;
`;

const ProductQuantity = () => (
  <ProductQuantityWords> 16 of 32 products </ProductQuantityWords>
);

export default ProductQuantity;
