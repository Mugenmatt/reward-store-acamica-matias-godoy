import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import ImagenDePrueba from '../assets/product-pics/LenovoYogaBook-x2.png'

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
        cursor: pointer;
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
    color: #0ad4fa;
`;

const PurchasedProduct = () => {
    return (
        <>
        <PurchasedProductCard>
            <div>
                <ProductImage src={ImagenDePrueba} alt="Producto"></ProductImage>
            </div>
            <div>
                <ProductTitle>Titulo del Producto: <KeyWords>Computadora Piola</KeyWords> </ProductTitle>
                <ProductDescription>Descripcion del Producto: <KeyWords>Una compu muy piola, que se pone re loca.</KeyWords> </ProductDescription>
                <ProductCost> Precio: <KeyWords>$20.000</KeyWords></ProductCost>
            </div>
        </PurchasedProductCard>
        </>
    );
};

export default PurchasedProduct;