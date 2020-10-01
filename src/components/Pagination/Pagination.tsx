import React, { FC } from "react";
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
  return (
    <PaginationButtons>
      {`${pageNumber} / ${pageCount}`}
      {pageNumber > 1 && <button onClick={decreaseNumber}>Previous</button>}
      {pageNumber < pageCount && <button onClick={increaseNumber}>Next</button>}
    </PaginationButtons>
  );
};

export default Pagination;
