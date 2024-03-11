import { styled } from "styled-components";

const Button = styled.button`
  margin-left: 10px;
  width: 155px;
  height: 33px;
  background-color: blue;
  border: 0;
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

export const Main = styled.main`
  margin: 150px;
`;
export const Title = styled.h1`
  color: #000;
  font: 26px / 26px OpenSans-Light, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 21px 5px;
  display: block;
  word-wrap: break-word;
`;
export const UseContainer = styled.section`
display: flex;
flex-direction: column;
gap: 10px;
  background: #fff;
`;
export const SortBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;
export const UsersList = styled.div``;
export const SearchBlock = styled.div`
  display: flex;
`;
export const Search = styled.input`
  width: 250px;
  height: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: blue;
  border-radius: 5px;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  outline: 0;

  &:focus {
    outline: 2px solid blue;
  }
`;
export const TotalCount = styled.div`
  margin-left: 10px;
  margin-top: 11px;
  color: #fff
`;
export const Filter = styled.div`
  display: flex;
`;
export const FilterButton = styled(Button)``;
export const SearchButton = styled(Button)``;
export const FilterItem = styled.li`
  font-family: 'StratosSkyeng', sans-serif;
  color: #000;
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
export const HeaderForUsers = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 2px solid #000000;
`;
export const User = styled.div``;
export const CountOfReps = styled.div``;
export const ListFilter = styled.div``;
export const ModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
`;
export const ModalHeaderTitle = styled.h1``;
export const ModalHeaderClose = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 30px;
`;