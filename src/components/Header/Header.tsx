import React, { FC } from "react";
import { Header, HeaderTitle, HeaderSearch } from "./styles";

interface HeaderProps {
  search: (event: React.FormEvent<HTMLInputElement>) => void;
}
const Head: FC<HeaderProps> = ({ search }) => {
  return (
    <Header>
      <HeaderTitle>User Search App</HeaderTitle>
      <HeaderSearch>
        <input
          type="search"
          onChange={search}
          placeholder="Search users by country"
        />
      </HeaderSearch>
      <span className="language">EN</span>
    </Header>
  );
};

export default Head;
