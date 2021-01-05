import React from 'react';
import styled from 'styled-components/macro';

const ProductQuantityWords = styled.p`
  font-size: 1.3em;
  font-weight: 400;
  display: inline-block;
  margin: 7% auto 0 auto;
  color: #616161;
`;

const ProductQuantity = (props) => {
  const { pagination } = props
  console.log(pagination);
  return (
    <ProductQuantityWords> {pagination === 0 ? '16' : '32'} of 32 products </ProductQuantityWords>
  )
};

export default ProductQuantity;
