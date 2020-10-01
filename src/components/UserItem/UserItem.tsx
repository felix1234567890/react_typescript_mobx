import React, { FC } from "react";
import { User } from "../../store/UserStore";
import { Card, UserDetails } from "./styles";

const UserItem: FC<User> = ({ name, email, photo, country, gender, age }) => {
  return (
    <Card>
      <img src={photo} alt="user avatar" />
      <h3 className="user__name">{name}</h3>
      <UserDetails>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Country:</strong> {country}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
      </UserDetails>
    </Card>
  );
};

export default UserItem;
