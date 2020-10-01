import styled from "styled-components";
import Select from "react-select";

export const SortBy = styled.div`
  border: 2px solid #566273;
  padding: 1rem;
  max-width: 25rem;
  margin: auto;

  span {
    color: white;
    font-weight: 700;
    text-align: center;
    display: block;
  }

  .select-filter {
    margin-top: 1rem;
  }
`;
export const SelectField = styled(Select)`
  .react-select__menu-list {
    color: #ffff;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border: 1px solid #566273;
    position: absolute;
    background-color: #212a38;
    left: 0;
    right: 0;
  }
  .react-select__control {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    height: 47px;
    margin-top: 1rem;
  }
  .react-select__indicators-container {
    margin-left: auto;
    height: 100%;
    margin-top: 0;
  }
  .react-select__option:hover {
    background-color: purple;
  }
  .react-select__single-value {
    font-weight: 500;
    padding-left: 8px;
    cursor: pointer;
    user-select: none;
  }
`;
