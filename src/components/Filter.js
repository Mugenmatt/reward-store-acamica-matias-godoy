import React from 'react';
import styled from 'styled-components/macro';
import nextPage from '../assets/icons/arrow-right.svg';

const FilterBox = styled.div`
  width: 80%;
  margin: auto auto auto 2em;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5%;
`;

const SortBy = styled.p`
  font-size: 1.3em;
  font-weight: 400;
  display: inline-block;
  color: #a3a3a3;
  border-left: 1px solid #d9d9d9;
  padding: 10px 0 10px 1.3em;
`;

const FilterBtnDiv = styled.div`
  margin-right: 20%;
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
  :hover {
    cursor: pointer;
    background-color: #0ad4fa;
    color: #fff;
  }
  :focus {
    background-color: #0ad4fa;
    color: #fff;
  }
`;

const PrevPageArrow = styled.img`
  border: 1px solid #d9d9d9;
  width: 46px;
  height: 46px;
  margin-right: 5px;
  border-radius: 100%;
  transform: rotate(180deg);
  cursor: pointer;
`;

const NextPageArrow = styled.img`
  border: 1px solid #d9d9d9;
  width: 46px;
  height: 46px;
  border-radius: 100%;
  cursor: pointer;
`;

const handleMostRecent = (e) => {
  console.log(e.target);
};

const handleLowestPrice = (e) => {
  console.log(e.target);
};

const handleHighestPrice = (e) => {
  console.log(e.target);
};

const handlePrevPage = (e) => {
  console.log(e.target);
};

const handleNextPage = (e) => {
  console.log(e.target);
};

const Filter = () => (
  <FilterBox>
    <SortBy> Sort By: </SortBy>
    <FilterBtnDiv>
      <FilterBtn onClick={handleMostRecent}> Most Recent </FilterBtn>
      <FilterBtn onClick={handleLowestPrice}> Lowest Price </FilterBtn>
      <FilterBtn onClick={handleHighestPrice}> Highest Price </FilterBtn>
    </FilterBtnDiv>
    <PrevPageArrow
      src={nextPage}
      alt="Previous Page"
      onClick={handlePrevPage}
    />
    <NextPageArrow src={nextPage} alt="Next Page" onClick={handleNextPage} />
  </FilterBox>
);
export default Filter;
