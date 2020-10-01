import styled from "styled-components";

export const Card = styled.article`
  padding: 20px;
  border: 1px solid #c9c9c9;
  border-radius: 7px;
  box-shadow: 2px 2px 4px rgba(255, 255, 255, 0.15);
  height: auto;
  word-wrap: break-word;
  box-sizing: border-box;
  height: 100%;
  text-align: center;

  img:first-child {
    border-radius: 7px 7px 0 0;
    max-width: 100%;
  }
  .user-name {
    font-size: 2rem;
    color: #fff;
    letter-spacing: 1px;
  }
`;
export const UserDetails = styled.div`
  p {
    color: #757575;
    margin: 0.7rem auto;
  }
`;
