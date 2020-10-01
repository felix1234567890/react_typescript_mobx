import React from "react";
import { useRootStore } from "./store/RootState";
import Header from "./components/Header";
import Filters from "./components/Filters";

function App() {
  const { filterUsers } = useRootStore();
  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    filterUsers(event.currentTarget.value);
  };

  return (
    <>
      <Header search={handleSearch} />
      <Filters />
    </>
  );
}

export default App;
