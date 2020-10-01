import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import { observer } from "mobx-react-lite";
import { useRootStore } from "./store/RootState";
import UsersList from "./components/UsersList";
import Pagination from "./components/Pagination";

type PaginationState = {
  pageNumber: number;
  itemsPerPage: number;
  pageCount: number;
};

const App = observer(() => {
  const {
    loadUsers,
    filterUsers,
    shownUsers,
    loading,
    paginateUsers,
    usersCount,
  } = useRootStore();
  const [paginationState, setPaginationState] = useState<PaginationState>({
    pageNumber: 1,
    itemsPerPage: 6,
    pageCount: 0,
  });

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    filterUsers(event.currentTarget.value);
  };
  const increaseNumber = (): void => {
    setPaginationState((prevState) => ({
      ...paginationState,
      pageNumber: prevState.pageNumber + 1,
    }));
  };
  const decreaseNumber = (): void => {
    setPaginationState((prevState) => ({
      ...paginationState,
      pageNumber: prevState.pageNumber - 1,
    }));
  };
  useEffect(() => {
    (async () => await loadUsers())();
    setPaginationState((prevState) => ({
      ...prevState,
      pageCount: Math.ceil(usersCount / paginationState.itemsPerPage),
    }));
    paginateUsers();
  }, [loadUsers, paginateUsers, paginationState.itemsPerPage, usersCount]);

  // useEffect(() => {
  //   if (usersCount > 0) {
  //     setPaginationState((prevState) => ({
  //       ...prevState,
  //       pageNumber: 1,
  //       pageCount: Math.ceil(usersCount / paginationState.itemsPerPage),
  //     }));
  //   }
  // }, [paginationState, usersCount]);
  useEffect(() => {
    paginateUsers(paginationState.pageNumber);
  }, [paginateUsers, paginationState.pageNumber]);

  return (
    <>
      <Header search={handleSearch} />
      <Filters />
      <UsersList users={shownUsers} loading={loading} />
      <Pagination
        pageCount={paginationState.pageCount!}
        pageNumber={paginationState.pageNumber}
        increaseNumber={increaseNumber}
        decreaseNumber={decreaseNumber}
      />
    </>
  );
});

export default App;
