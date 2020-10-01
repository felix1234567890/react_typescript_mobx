import React from "react";
import { useRootStore } from "./store/RootState";

function App() {
  const { loading } = useRootStore();
  console.log(loading);
  return <h1>Hello</h1>;
}

export default App;
