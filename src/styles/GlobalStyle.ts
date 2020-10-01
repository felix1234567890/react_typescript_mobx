import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};
        color: ${({ theme }) => theme.colors.bodyColor};
        min-height: 100vh;
        letter-spacing: 1px;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
export default GlobalStyle;
