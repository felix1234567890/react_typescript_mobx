import styled from "styled-components";
export const Header = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  .language {
    font-weight: 600;
    margin-left: 2rem;
    font-size: 1.8rem;
    &:hover {
      color: white;
    }
    @media only screen and (max-width: 600px) {
      margin-top: 2rem;
      margin-left: unset;
    }
  }
`;
export const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 3rem;
  color: #fff;
  @media only screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;
export const HeaderSearch = styled.div`
  input {
    background: lighten($body-background-color, 10%);
    margin-left: 5rem;
    border: 1px solid lighten($body-background-color, 10%);
    padding: 1rem 2rem;
    border-radius: 10rem;
    width: 25rem;
    outline: none;
    color: $body-color;

    @media only screen and (max-width: 600px) {
      margin-left: 0;
      margin-top: 1rem;
    }
    &::placeholder {
      color: white;
      opacity: 0.9;
    }
  }
`;
