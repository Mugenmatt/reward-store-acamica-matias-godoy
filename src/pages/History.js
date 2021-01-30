import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import PurchasedProduct from '../components/PurchasedProduct';

const HomeBtn = styled.p`
  text-decoration: none;
  color: #fff;
  position: relative;
  left: 74.4%;
  display: inline-block;
  font-size: 1.7em;
  width: 15%;
  text-align: center;
  margin-top: 5%;
  background-color: #0ad4fa;
  padding: 10px 5px;
  border-radius: 10px;
  transition: 0.5s;
  :hover {
    background-color: #0ac4fa;
    color: #fff;
  }
  @media (max-width:1000px) {
    width:30%;
    margin: 5% 0 0 %50;
  }
`;

const History = () => {
    const [history, setHistory] = useState([]);
    useEffect(() => {
        fetch(`https://coding-challenge-api.aerolab.co/user/history`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI5NWY3YzhjYWIyMDAwMjBiODBiNTkiLCJpYXQiOjE2MDU5ODQxMjR9.RpQtGdkEPGoLmKYkPwyfdvufyT8wsFnVOkGrd9uJd0w',
          },
        })
          .then((res) => res.json())
          .then((historyData) => setHistory(historyData))
          .catch((error) => console.log(error));
      }, []);
      
    return (
        <>
        <NavLink to={"/reward-store-acamica-matias-godoy"} style={{textDecoration:'none'}}>
          <HomeBtn>Back</HomeBtn>
        </NavLink>
        <hr style={{ border: '1px solid #d9d9d9', 'margin-bottom':'4%' }} />
        {history.map(product => {
          return <PurchasedProduct
            title={product.name}
            category={product.category}
            price={product.cost}
            img={product.img.url}
          />
        })
        }
        </>
    );
};

export default History;