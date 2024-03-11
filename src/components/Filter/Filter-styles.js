import { styled } from "styled-components";

export const CenterBlockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
`
export const filterDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`

export const filterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterItem = styled.li`
  font-family: 'StratosSkyeng', sans-serif;
  color: black;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */

  &:hover {
    color: blue;
    text-decoration-line: underline;
    cursor: pointer;
  }
`
export const FilterCategoryName = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FilterButton = styled.button`
  margin-left: 10px;
  width: 155px;
  height: 33px;
  background-color: blue;
  border:0;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background-color: #0080c1;
  }
`;

export const FilterButtonActive = styled(FilterButton)`
  border-color: #ad61ff;
  color: #ad61ff;
`;

export const FilterButtonText = styled(FilterButton)`
&:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

&:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
`;

export const FilterCategoryMenu = styled.div`
  max-height: 305px;
  width: 248px;
  display: inline-flex;
  padding: 34px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: 3px solid blue;
  border-radius: 12px;
  background: white;
  position: absolute;
  top: 49px;
  z-index: 2;
`;
export const FilterHeader = styled.p`
  font-family: 'StratosSkyeng', sans-serif;
  color: black;
  font-size: 20px;
  width: 350px;
`;

export const FilterList = styled.ul`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  
  font-family: "StratosSkyeng", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  overflow-y: auto;

  padding-left: 20px;

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 10px;
    background-color: #4b4949;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #909090;
    height: 15px;
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: #4b4949;
  }
`;

export const selectedFilterCount = styled.div`
  background-color: #ad61ff;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8px;
  top: -8px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px; /* 100% */
`;