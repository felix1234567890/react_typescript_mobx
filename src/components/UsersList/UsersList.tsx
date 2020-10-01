import { observer } from "mobx-react-lite";
import React, { FC } from "react";

import { User } from "../../store/UserStore";
import UserItem from "../UserItem/UserItem";
import { Container, Cards } from "./styles";

interface UsersListProps {
  users: User[];
  loading: boolean;
}

const UsersList: FC<UsersListProps> = ({ users, loading }) => {
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      <Cards>
        {users.length > 0 &&
          users.map((user: User, index: number) => {
            return <UserItem {...user} key={index} />;
          })}
      </Cards>
    </Container>
  );
};

export default observer(UsersList);
