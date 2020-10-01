import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRootStore } from "./store/RootState";

function App() {
  const { loading } = useRootStore();
  console.log(loading);
  return <h1>Hello</h1>;
}

export default App;
