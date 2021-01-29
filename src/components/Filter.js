import React from 'react';
import styled from 'styled-components/macro';
import nextPage from '../assets/icons/arrow-right.svg';
import ProductQuantity from './ProductQuantity';

const FilterBox = styled.div`
  width: 80%;
  margin: auto auto auto 2em;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5%;
  @media (max-width:1280px) {
    width: 95%;
  }
  @media (max-width:1000px) {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SortBy = styled.p`
  font-size: 1.3em;
  font-weight: 400;
  display: inline-block;
  color: #a3a3a3;
  border-left: 1px solid #d9d9d9;
  padding: 10px 0 10px 1.3em;
  @media (max-width:1280px) {
    border-left: 0;
  }
  @media (max-width:1000px) {
    font-size: 1.5em;
    padding-right: 0;
    display: block;
    text-align: center;
  }
  @media (max-width:700px) {
    display: none
  }
`;

const FilterBtnDiv = styled.div`
  @media (max-width:1000px) {
    width: 100%;
    text-align: center;
  }
`;

const FilterBtn = styled.button`
  font-size: 1.3em;
  font-weight: 400;
  width: 150px;
  height: 48px;
  margin-left: 20px;
  border: none;
  border-radius: 100px;
  background-color: #ededed;
  color: #a3a3a3;
  letter-spacing: -0.15px;
  transition: 0.5s;
  :hover {
    cursor: pointer;
    background-color: #0ad4fa;
    color: #fff;
  }
  :focus {
    background-color: #0ad4fa;
    color: #fff;
  }
  @media (max-width:1000px) {
    font-size: 1.5em;
    width: 70%;
    margin: 2% 0;
  }
`;

const PageArrowContainer = styled.div`
  width: 15%;
  display: block;
  @media (max-width:1000px) {
    width: 100%;
    margin-top: 3%;
    display: flex;
    justify-content: space-between;
  }
`;

const PrevPageArrow = styled.img`
  border: 1px solid #d9d9d9;
  width: 46px;
  height: 46px;
  border-radius: 100%;
  transform: rotate(180deg);
  cursor: pointer;
`;

const NextPageArrow = styled.img`
  border: 1px solid #d9d9d9;
  width: 46px;
  height: 46px;
  border-radius: 100%;
  margin-left: 2%;
  cursor: pointer;
  @media (max-width:1000px) {
    margin-left: 2%;
  }
`;

const Filter = (props) => {
  const { handleHighestPrice, handleLowestPrice, handleNextPage, handlePrevPage, pagination } = props;
  return (
    <>
      <ProductQuantity pagination={pagination} />
      <FilterBox>
        <SortBy> Sort By: </SortBy>
        <FilterBtnDiv>
          <FilterBtn onClick={handleLowestPrice}> Lowest Price </FilterBtn>
          <FilterBtn onClick={handleHighestPrice}> Highest Price </FilterBtn>
        </FilterBtnDiv>
        <PageArrowContainer>
          <PrevPageArrow src={nextPage} alt="Previous Page" onClick={handlePrevPage} />
          <NextPageArrow src={nextPage} alt="Next Page" onClick={handleNextPage} />
        </PageArrowContainer>
      </FilterBox>
    </>
  );
};
export default Filter;
