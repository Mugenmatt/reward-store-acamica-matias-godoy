import React, {useState} from 'react';
import styled from 'styled-components/macro';
import whiteBag from '../assets/icons/buy-blue.svg';
import blueBag from '../assets/icons/buy-white.svg';
import coinImg from '../assets/icons/coin.svg';
import Lottie from 'react-lottie';
import errorAnimation from '../assets/animations/14651-error-animation.json';
import successAnimation from '../assets/animations/37265-success-animation.json';

const ProductCardBox = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 270px;
  height: 346.45px;
  margin: 10px 0;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease-in;
  :hover {
    transform: scale(1.1) translateY(-5%);
    z-index: 5;
  }
  @media (max-width: 1280px) {
    width: 95%;
  }
  @media (max-width:500px) {
    margin-top: 4%;
  }
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
  right: 0;
  padding: 10px;
  transition: 3s;
  opacity: ${props => props.primary ? '0' : '1'};
`;

const ProductImg = styled.img`
  width: 175px;
  height: 142px;
  margin-top: 5%;
  border-bottom: 2px solid #d9d9d9;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin: 0;
  margin-bottom: 0.6em;
  color: #0ad4fa;
  letter-spacing: -0.04px;
  font-weight: 700;
`;

const Coin = styled.img`
  width: 25px;
`;

const CoinNeeded = styled.img`
  width: 25px;
  margin-left: 5px;
`;

const RedeemBtn = styled.button`
  padding: 10px;
  background-color: #0ad4fa;
  color: #fff;
  border: 1px solid #0ad4fa;
  border-radius: 10px;
  display: block;
  margin: 10px auto;
  transition: 0.5s;
  :hover {
    border: 1px solid #0ad4fa;
    background-color: #fff;
    color: #0ad4fa;
    cursor: pointer;
  }
`;

const CantRedeem = styled.p`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 5px;
  background-color: #0ad4fa;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
`;

const ModalShowing = styled.div`
  opacity: 1;
  pointer-events: none;
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
  right: -10%;
  top: -10%;
  background: rgba(10, 212, 250, .7);
  padding: 30px;
  animation: bgOpacity 3s ease-in-out;
  @keyframes bgOpacity {
    0% {opacity: 1;}
    90% {opacity: 1;}
    100% {opacity: 0;}
  }
`;

const ProductCard = (props) => {
  const { img, name, cost, category, handleRedeemProducts, id, onRedeemUpdateUser, userPoints } = props;
  const [bagColor, setBagColor] = useState(0)
  const [modalState, setModalState] = useState(0);

  const handleClick = () => {
    if(cost < userPoints){
      setBagColor(1);
      setModalState(1);
      setTimeout(() => {
      setModalState(0);
      setBagColor(0);
      handleRedeemProducts(id);
      onRedeemUpdateUser(true);
      }, 3000);
    }
  }

  return (
    <ProductCardBox>
        {modalState === 1 && <ModalShowing> <Lottie modalState options={{animationData: successAnimation, controls: false, loop: false}} style={{"width": "200px"}} /> </ModalShowing>}
        <BagProductDiv>
        {bagColor
        ? <ShoppingBag primary src={whiteBag} />
        : <ShoppingBag src={blueBag} /> }
          <ProductImg src={img} />
        </BagProductDiv>
        <ProductCategory> {category} </ProductCategory>
        <ProductTitle> {name} </ProductTitle>
        {cost < userPoints && modalState === 0
        ? <>
          <ProductCost> <Coin src={coinImg} alt={'Coin'}/> {cost} </ProductCost>
          <RedeemBtn onClick={handleClick}> Redeem </RedeemBtn></>
        : <>
          <ProductCost> <Coin src={coinImg} alt={'Coin'}/> {cost} </ProductCost>
          {modalState === 0 ? <CantRedeem>You need {cost - userPoints} <CoinNeeded cantRedeem src={coinImg} alt={'Coin'}/></CantRedeem> : null} </>
        }
    </ProductCardBox>
  );
};

export default ProductCard;
