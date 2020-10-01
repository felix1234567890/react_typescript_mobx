import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { UserStore } from "./store/UserStore";
import { RootStateProvider } from "./store/RootState";
const userStore = new UserStore();
export const RootStoreContext = React.createContext(userStore);

ReactDOM.render(
  <RootStateProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RootStateProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
