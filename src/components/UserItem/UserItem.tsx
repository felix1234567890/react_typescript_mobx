import React, { FC } from "react";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import { User } from "../../store/UserStore";
import { Card, UserDetails } from "./styles";

const UserItem: FC<User> = ({ name, email, photo, country, gender, age }) => {
  const { t }: UseTranslationResponse = useTranslation();
  return (
    <Card>
      <img src={photo} alt="user avatar" />
      <h3 className="user__name">{name}</h3>
      <UserDetails>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>{t("country")}:</strong> {country}
        </p>
        <p>
          <strong>{t("gender")}:</strong> {gender}
        </p>
        <p>
          <strong>{t("age")}:</strong> {age}
        </p>
      </UserDetails>
    </Card>
  );
};

export default UserItem;
