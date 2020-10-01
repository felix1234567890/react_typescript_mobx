import React, { useEffect } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import { observer } from "mobx-react-lite";
import { useRootStore } from "./store/RootState";
import UsersList from "./components/UsersList";

const App = observer(() => {
  const { loadUsers, filterUsers, users, loading } = useRootStore();

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    filterUsers(event.currentTarget.value);
  };
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <>
      <Header search={handleSearch} />
      <Filters />
      <UsersList users={users} loading={loading} />
    </>
  );
});

export default App;
