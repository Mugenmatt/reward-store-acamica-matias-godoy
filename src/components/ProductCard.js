import React from 'react';
import styled from 'styled-components/macro';
import whiteBag from '../assets/icons/buy-blue.svg';
// import blueBag from '../assets/icons/buy-white.svg';
// import productImg from '../assets/product-pics/AcerAspire-x1.png';

const ProductCardBox = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 270px;
  padding: 0 0 25px 0;
  margin: 10px 0;
  position: relative;
`;

const BagProductDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const ShoppingBag = styled.img`
  background: #ffffff;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  position: absolute;
  z-index: 1;
  right: 0;
  padding: 10px;
`;

const ProductImg = styled.img`
  width: 175px;
  height: 142px;
  margin-top: 5%;
  border-bottom: 2px solid #d9d9d9;
  cursor: pointer;
`;

const ProductCategory = styled.p`
  font-size: 16px;
  color: #a3a3a3;
  letter-spacing: -0.04px;
  font-weight: 400;
  margin-left: 18%;
`;

const ProductTitle = styled.p`
  font-size: 18px;
  color: #616161;
  letter-spacing: -0.04px;
  font-weight: 400;
  margin-left: 18%;
`;

const ProductCost = styled.p`
  font-size: 25px;
  margin: 0;
  margin-bottom: 0.6em;
  color: #0ad4fa;
  letter-spacing: -0.04px;
  font-weight: 700;
  text-align: center;
`;

const RedeemBtn = styled.button`
  padding: 10px;
  background-color: #0ad4fa;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  display: block;
  margin: auto;
  :hover {
    border: 1px solid #0ad4fa;
    background-color: #0ae4fa;
    cursor: pointer;
  }
`;

const CantRedeem = styled.p`
  width: 40%;
  margin: auto;
  text-align: center;
  padding: 10px;
  background-color: #0ad4fa;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
`;

const ProductCard = (props) => {
  const { img, name, cost, category, handleRedeemProducts, id, onRedeemUpdateUser, userPoints } = props;

  const handleClick = () => {
    handleRedeemProducts(id)
    onRedeemUpdateUser(true)
  }
  return (
    <ProductCardBox>
      <BagProductDiv>
        <ShoppingBag src={whiteBag} />
        <ProductImg src={img} />
      </BagProductDiv>
      <ProductCategory> {category} </ProductCategory>
      <ProductTitle> {name} </ProductTitle>
      {cost < userPoints
      ? <><ProductCost> ${cost} </ProductCost>
        <RedeemBtn onClick={handleClick}> Redeem </RedeemBtn></>
      : <CantRedeem> Insufficient Points! </CantRedeem>
      }
    </ProductCardBox>
  );
};

export default ProductCard;
