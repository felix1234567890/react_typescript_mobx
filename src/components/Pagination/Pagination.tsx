import React, { FC } from "react";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import { PaginationButtons } from "./styles";

interface PaginationProps {
  pageCount: number;
  pageNumber: number;
  increaseNumber: () => void;
  decreaseNumber: () => void;
}

const Pagination: FC<PaginationProps> = ({
  pageCount,
  pageNumber,
  increaseNumber,
  decreaseNumber,
}) => {
  const { t }: UseTranslationResponse = useTranslation();
  return (
    <PaginationButtons>
      {`${pageNumber} / ${pageCount}`}
      {pageNumber > 1 && (
        <button onClick={decreaseNumber}>{t("previous")}</button>
      )}
      {pageNumber < pageCount && (
        <button onClick={increaseNumber}>{t("next")}</button>
      )}
    </PaginationButtons>
  );
};

export default Pagination;
