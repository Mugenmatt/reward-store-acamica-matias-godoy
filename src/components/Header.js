import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
// import propTypes from 'prop-types';
import logoImg from '../assets/aerolab-logo.svg';
import bannerImg from '../assets/banner.png';
import coinImg from '../assets/icons/coin.svg';

const Menu = styled.div`
  width: 100%;
  height: 8.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const MenuLogo = styled.img`
  width: 2.34em;
  height: 3.83vh;
  margin-left: 2em;
`;

const RightBoxMenu = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2em 0 0;
`;

const UserName = styled.p`
  font-size: 1.5em;
  font-weight: 300;
  color: #616161;
  letter-spacing: -0.15px;
  text-align: left;
  margin: 0 0.4em 0 0;
`;

const AddPointsBtn = styled.button`
  margin: 0 15px;
  border-radius:50px;
  border-style: none;
  padding: 15px;
  text-align: center;
  font-weight: 400;
  :hover {
    color: #fff;
    background-color: #0ad4fa;
    cursor: pointer;
    font-weight: 400;
  }
`;

const CoinNumberBox = styled.div`
  width: 6.18em;
  height: 5.11vh;
  background: #ededed;
  border-radius: 100px;
  display: flex;
  justify-content: space-evenly;
  padding-left: 10px;
  align-items: center;
`;

const CoinsNumber = styled.p`
  font-size: 1.2em;
  font-weight: 700;
  color: #616161;
  letter-spacing: -0.15px;
`;

const Coin = styled.img`
  width: 25px;
  height: 25px;
  padding-right: 5px;
`;

const BannerBox = styled.div`
  background-image: url(${bannerImg});
  width: 100%;
  height: 43.92vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 50%;
  position: relative;
`;

const BannerTitle = styled.h3`
  position: absolute;
  font-size: 64px;
  color: #ffffff;
  z-index: 100;
  margin-top: 3.5em;
  margin-left: 1.92em;
`;

const Header = () => {
  const [user, setUser] = useState([]);
  const [addPoints, setAddPoints] = useState();
  useEffect(() => {
    fetch(`https://coding-challenge-api.aerolab.co/user/me`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI5NWY3YzhjYWIyMDAwMjBiODBiNTkiLCJpYXQiOjE2MDU5ODQxMjR9.RpQtGdkEPGoLmKYkPwyfdvufyT8wsFnVOkGrd9uJd0w',
      },
    })
      .then((res) => res.json())
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePoints = (e) => {
    console.log(addPoints["New Points"]);
    console.log(user.points);
    console.log(setAddPoints);
  }

  useEffect(() => {
    fetch(`https://coding-challenge-api.aerolab.co/user/points`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI5NWY3YzhjYWIyMDAwMjBiODBiNTkiLCJpYXQiOjE2MDU5ODQxMjR9.RpQtGdkEPGoLmKYkPwyfdvufyT8wsFnVOkGrd9uJd0w',
      },
      body: `{"amount": 1000}`
    })
      .then((res) => res.json())
      .then((dataPoints) => {setAddPoints(dataPoints)})
      .catch((error) => console.log(error));
  }, []);

  return (
    <header>
      <Menu>
        <MenuLogo src={logoImg} alt="Logo" />
        <RightBoxMenu>
          <UserName> {user.name} </UserName>
          <AddPointsBtn onClick={handlePoints}> + Points </AddPointsBtn>
          <CoinNumberBox>
            <CoinsNumber> {user.points} </CoinsNumber>
            <Coin src={coinImg} />
          </CoinNumberBox>
        </RightBoxMenu>
      </Menu>
      <BannerTitle>Electronics</BannerTitle>
      <BannerBox />
    </header>
  );
};

export default Header;
