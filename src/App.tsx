import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import { observer } from "mobx-react-lite";
import { useRootStore } from "./store/RootState";
import UsersList from "./components/UsersList";
import Pagination from "./components/Pagination";
import { Option } from "./components/Filters/Filters";

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
    sortUsers,
  } = useRootStore();

  const [paginationState, setPaginationState] = useState<PaginationState>({
    pageNumber: 1,
    itemsPerPage: 6,
    pageCount: 0,
  });

  const [sortOrder, setSortOrder] = useState<Option>({
    value: "",
    label: "None",
  });

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    filterUsers(event.currentTarget.value);
  };

  const increaseNumber = (): void => {
    setPaginationState((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  const decreaseNumber = (): void => {
    setPaginationState((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber - 1,
    }));
  };

  const handleSortByAge = (srtOrder: Option) => {
    setSortOrder(srtOrder);
    setPaginationState((prevState) => ({
      ...prevState,
      pageNumber: 1,
    }));
  };

  useEffect(() => {
    (async () => await loadUsers())();
  }, [loadUsers]);

  useEffect(() => {
    setPaginationState((prevState) => ({
      ...prevState,
      pageCount: Math.ceil(usersCount / paginationState.itemsPerPage),
    }));
    paginateUsers();
  }, [paginateUsers, usersCount, paginationState.itemsPerPage]);

  useEffect(() => {
    sortUsers(sortOrder.value);
    paginateUsers();
  }, [paginateUsers, sortOrder, sortUsers]);

  useEffect(() => {
    paginateUsers(paginationState.pageNumber);
  }, [paginateUsers, paginationState.pageNumber]);

  return (
    <>
      <Header search={handleSearch} />
      <Filters sort={handleSortByAge} sortOrder={sortOrder} />
      <UsersList users={shownUsers} loading={loading} />
      <Pagination
        pageCount={paginationState.pageCount}
        pageNumber={paginationState.pageNumber}
        increaseNumber={increaseNumber}
        decreaseNumber={decreaseNumber}
      />
    </>
  );
});

export default App;
