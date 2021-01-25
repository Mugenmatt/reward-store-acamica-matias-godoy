import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import PurchasedProduct from '../components/PurchasedProduct';

const HomeBtn = styled.p`
  text-decoration: none;
  color: #fff;
  font-size: 1.7em;
  width: 15%;
  display: block;
  text-align: center;
  margin-left: 74.4%;
  margin-top: 5%;
  background-color: #0ad4fa;
  padding: 10px 5px;
  border-radius: 10px;
  :hover {
    background-color: #0ac4fa;
    color: #fff;
    cursor: pointer;
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
        <NavLink to={"/"} style={{textDecoration:'none'}}>
          <HomeBtn>Back</HomeBtn>
        </NavLink>
        <hr style={{ border: '1px solid #d9d9d9' }} />
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