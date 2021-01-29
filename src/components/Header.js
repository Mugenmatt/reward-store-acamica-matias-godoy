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
  @media (max-width:700px) {
    height: auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const MenuLogo = styled.img`
  width: 2.34em;
  height: 3.83vh;
  margin-left: 2em;
  @media (max-width:700px) {
    width:10em;
    height: 10vh;
    display: block;
    margin-top: 1em;
    margin-left: 0;
  }
`;

const RightBoxMenu = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2em 0 0;
  @media (max-width:700px) {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 2em 0 0 0;
  }
`;

const UserName = styled.p`
  font-size: 1.5em;
  font-weight: 300;
  color: #616161;
  letter-spacing: -0.15px;
  text-align: left;
  margin: 0 0.4em 0 0;
  @media (max-width:700px) {
    margin: 0;
  }
`;

const AddPointsBtn = styled.button`
  margin: 0 10px 0 0;
  border-radius:50px;
  border-style: none;
  padding: 15px;
  text-align: center;
  font-weight: 400;
  position: relative;
  :hover {
    color: #fff;
    background-color: #0ad4fa;
    cursor: pointer;
    font-weight: 400;
  }
  @media (max-width:700px) {
    margin: 0;
  }
`;

const Points = styled.button`
  margin: 0 10px 0 0;
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
  @media (max-width:700px) {
    margin: 0;
    width: 100%;
    display: block;
  }
`;

const PointsContainer = styled.div`
  @media (max-width:700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  @media (max-width:1000px) {
    height: 32vh;
  }
  @media (max-width:700px) {
    display: none;
  }
`;

const BannerTitle = styled.h3`
  position: absolute;
  font-size: 64px;
  color: #ffffff;
  z-index: 100;
  margin-top: 3.5em;
  margin-left: 1.92em;
  @media (max-width:1000px) {
    font-size: 3em;
  }
  @media (max-width:700px) {
    display: none;
  }
`;

const Header = (props) => {
  const { updateUser, onRedeemUpdateUser} = props;
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState();
  const [showBtn, setShowBtn] = useState(false);

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
          setUsername(userData.name)
          setUser(userData.points);
        })
        .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if(updateUser) {
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
          setUsername(userData.name)
          setUser(userData.points);
          onRedeemUpdateUser(false);
        })
        .catch((error) => console.log(error));
  }
  }, [updateUser, onRedeemUpdateUser]);

  const handlePoints = (e) => {
    let points = e.target.innerText;

    if(points === "+ 1000") {
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
        .then((dataPoints) => {
          setUser(dataPoints["New Points"])
        })
        .catch((error) => console.log(error));
    } else if(points === "+ 5000") {
      fetch(`https://coding-challenge-api.aerolab.co/user/points`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI5NWY3YzhjYWIyMDAwMjBiODBiNTkiLCJpYXQiOjE2MDU5ODQxMjR9.RpQtGdkEPGoLmKYkPwyfdvufyT8wsFnVOkGrd9uJd0w',
        },
        body: `{"amount": 5000}`
      })
        .then((res) => res.json())
        .then((dataPoints) => {
          setUser(dataPoints["New Points"])
        })
        .catch((error) => console.log(error));
    } else {
      fetch(`https://coding-challenge-api.aerolab.co/user/points`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI5NWY3YzhjYWIyMDAwMjBiODBiNTkiLCJpYXQiOjE2MDU5ODQxMjR9.RpQtGdkEPGoLmKYkPwyfdvufyT8wsFnVOkGrd9uJd0w',
        },
        body: `{"amount": 7500}`
      })
        .then((res) => res.json())
        .then((dataPoints) => {
          setUser(dataPoints["New Points"])
        })
        .catch((error) => console.log(error));
    }
  }

  const handleShowBtn = () => {
    setShowBtn(true)
    setTimeout(e => {
      setShowBtn(false)
    }, 10000)
  }

  return (
    <header>
      <Menu>
        <MenuLogo src={logoImg} alt="Logo" />
        <RightBoxMenu>
          <UserName> {username} </UserName>
          <PointsContainer>
            {showBtn && <Points onClick={handlePoints}> + 1000 </Points>}
            {showBtn && <Points onClick={handlePoints}> + 5000 </Points>}
            {showBtn && <Points onClick={handlePoints}> + 7500 </Points>}
            <AddPointsBtn onClick={handleShowBtn}> Add Points </AddPointsBtn>
          </PointsContainer>
          <CoinNumberBox>
            <CoinsNumber> {user} </CoinsNumber>
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
