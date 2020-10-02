import React, { FC } from "react";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import { SortBy, SelectField } from "./styles";

export type Option = {
  value: string;
  label: string;
};

interface FiltersProps {
  sort: (sortOrder: Option) => void;
  sortOrder: Option;
}
const Filters: FC<FiltersProps> = ({ sort, sortOrder }) => {
  const { t }: UseTranslationResponse = useTranslation();
  const options: Option[] = [
    { value: "", label: t("none") },
    { value: "asc", label: t("ageAsc") },
    { value: "desc", label: t("ageDesc") },
    { value: "under40", label: t("ageUnder") },
    { value: "over40", label: t("ageOver") },
    { value: "male", label: t("male") },
    { value: "female", label: t("female") },
  ];
  return (
    <SortBy>
      <span>{t("sortBy")}</span>
      <SelectField
        classNamePrefix="react-select"
        defaultValue={options[0]}
        options={options}
        value={sortOrder}
        onChange={sort}
      />
    </SortBy>
  );
};

export default Filters;
