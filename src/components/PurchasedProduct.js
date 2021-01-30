import React from 'react';
import styled from 'styled-components/macro';
import coinImg from '../assets/icons/coin.svg';

const PurchasedProductCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5%;
    border: 1px solid #0ad4fa;
    border-radius: 10px;
    box-shadow: 3px 4px 10px #0ac4fa;
    :hover {
        border: 1px solid #0ac4fa;
        box-shadow: 3px 4px 10px #0ad4fa;
    }
`;

const ProductImage = styled.img`
    width:100%;
`;

const ProductTitle = styled.p`
    font-weight: 400;
`;

const ProductDescription = styled.p`
    font-weight: 400;
`;

const ProductCost = styled.p`
    font-weight: 400;
`;

const KeyWords = styled.p`
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0ad4fa;
    font-size: 1.3em;
`;

const Coin = styled.img`
  width: 25px;
`;

const PurchasedProduct = (props) => {
    const { title, category, price, img } = props;
    return (
        <>
        <PurchasedProductCard>
            <div>
                <ProductImage src={img} alt="Producto"></ProductImage>
            </div>
            <div>
                <ProductTitle>Product Title: <KeyWords>{title}</KeyWords> </ProductTitle>
                <ProductDescription>Product Description: <KeyWords>{category}</KeyWords> </ProductDescription>
                <ProductCost> Price: <KeyWords><Coin src={coinImg} alt={'Coin'} />{price}</KeyWords></ProductCost>
            </div>
        </PurchasedProductCard>
        </>
    );
};

export default PurchasedProduct;