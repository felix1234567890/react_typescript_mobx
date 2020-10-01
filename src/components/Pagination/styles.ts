import styled from "styled-components";

export const PaginationButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: inline-block;
    padding: 12px 38px;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    color: blue;
    background-color: #fff;
    border: 2px solid blue;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 150px;
    margin: 1rem;
    :hover,
    :focus {
      outline: none;
      color: #fff;
      background-color: #3db5eb;
      border-color: #3db5eb;
    }
    :active {
      color: #fff;
      background-color: blue;
      border-color: blue;
    }
  }
`;
