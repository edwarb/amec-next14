"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
} from "components/ui/pagination";
import { Button } from "components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  itemCount: number;
  pageSize: number;
  currentPage: number;
  disabledPrev: boolean;
  disabledNext: boolean;

  onSelectNext: () => void;
  onSelectPrev: () => void;
};

const PaginationComponent = ({
  itemCount,
  pageSize,
  currentPage,
  disabledNext,
  disabledPrev,
  onSelectNext,
  onSelectPrev,
}: Props) => {
  // const displayPageCount = 3;
  // const generatePaginationLinks = () => {
  //   const paginationLinks = [];
  //   const leftEllipsis = currentPage > 2;
  //   const rightEllipsis = currentPage < pageCount - 1;

  //   for (let i = 1; i <= pageCount; i++) {
  //     if (
  //       i === 1 ||
  //       i === pageCount ||
  //       (i >= currentPage - 1 && i <= currentPage + 1)
  //     ) {
  //       paginationLinks.push(
  //         <PaginationLink key={i} isActive={currentPage === i}>
  //           {i}
  //         </PaginationLink>,
  //       );
  //     }
  //   }

  //   if (leftEllipsis) {
  //     paginationLinks.splice(1, 0, <PaginationEllipsis key="left" />);
  //   }
  //   if (rightEllipsis) {
  //     paginationLinks.splice(
  //       paginationLinks.length - 1,
  //       0,
  //       <PaginationEllipsis key="right" />,
  //     );
  //   }

  //   return paginationLinks;
  // };

  // const pageCount = Math.ceil(itemCount / pageSize);
  // if (pageCount <= 1) return null;

  return (
    <Pagination>
      <PaginationContent className="*:cursor-pointer">
        <Button
          variant="ghost"
          disabled={disabledPrev}
          onClick={() => {
            onSelectPrev();
          }}
          className="group"
        >
          <ChevronLeft className="transition-all delay-150 duration-300 group-hover:-translate-x-1" />{" "}
          Previous
        </Button>
        <Button
          variant="ghost"
          disabled={disabledNext}
          onClick={() => {
            onSelectNext();
          }}
          className="group"
        >
          Next{" "}
          <ChevronRight className="transition-all delay-150 duration-300 group-hover:translate-x-1" />
        </Button>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
