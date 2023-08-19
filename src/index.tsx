import React from "react";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { UserStore } from "./store/UserStore";
import { RootStateProvider } from "./store/RootState";
import { createRoot } from 'react-dom/client';
import "./i18n";

const userStore = new UserStore();
export const RootStoreContext = React.createContext(userStore);
const domNode = document.getElementById('root') 
if (!domNode) throw new Error('Failed to find the root element');
const root = createRoot(domNode)
root.render(
  <RootStateProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RootStateProvider>
);

serviceWorker.unregister();
