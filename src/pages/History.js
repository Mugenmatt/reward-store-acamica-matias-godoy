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
`;

const History = () => {
    return (
        <>
        <NavLink to={"/"} style={{textDecoration:'none'}}>
          <HomeBtn>Back</HomeBtn>
        </NavLink>
        <hr style={{ border: '1px solid #d9d9d9' }} />;
        <PurchasedProduct />
        <PurchasedProduct />
        <PurchasedProduct />
        <PurchasedProduct />
        </>
    );
};

export default History;