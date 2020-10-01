import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;

  h1 {
    text-align: center;
  }
`;
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 49%);
  justify-content: space-between;
  row-gap: 1.5rem;
`;
