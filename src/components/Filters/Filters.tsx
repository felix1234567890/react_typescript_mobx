import React, { FC } from "react";
import { SortBy, SelectField } from "./styles";

export type Option = {
  value: string;
  label: string;
};
const options: Option[] = [
  { value: "", label: "None" },
  { value: "asc", label: "Age - ascending" },
  { value: "desc", label: "Age - descending" },
  { value: "under40", label: "Age - under 40" },
  { value: "over40", label: "Age - over 40" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];
interface FiltersProps {
  sort: (sortOrder: Option) => void;
  sortOrder: Option;
}
const Filters: FC<FiltersProps> = ({ sort, sortOrder }) => {
  return (
    <SortBy>
      <span>Sort By</span>
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
