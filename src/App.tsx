import React from "react";
import { useRootStore } from "./store/RootState";
import Header from "./components/Header";

function App() {
  const { loading } = useRootStore();
  console.log(loading);
  return <Header />;
}

export default App;
