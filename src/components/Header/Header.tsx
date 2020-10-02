import React, { FC, useEffect, useState } from "react";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import { Header, HeaderTitle, HeaderSearch } from "./styles";

interface HeaderProps {
  search: (event: React.FormEvent<HTMLInputElement>) => void;
}
const Head: FC<HeaderProps> = ({ search }) => {
  const [lang, setLang] = useState("en");
  const { t, i18n }: UseTranslationResponse = useTranslation();

  const changeLanguage = () => {
    lang === "en" ? setLang("hr") : setLang("en");
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  return (
    <Header>
      <HeaderTitle>{t("headerTitle")}</HeaderTitle>
      <HeaderSearch>
        <input type="search" onChange={search} placeholder={t("searchText")} />
      </HeaderSearch>
      <span className="language" onClick={changeLanguage}>
        {t("lng")}
      </span>
    </Header>
  );
};

export default Head;
