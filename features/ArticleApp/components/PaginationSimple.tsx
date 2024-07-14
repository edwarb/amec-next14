"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
} from "components/ui/pagination";
import { Button } from "components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  itemCount: number;
  pageSize: number;
  currentPage: number;

  onSelectNewPage: (value: number) => void;
};

const PaginationComponent = ({ itemCount, pageSize, currentPage, onSelectNewPage }: Props) => {
  // const router = useRouter();
  // const searchParams = useSearchParams();

  const displayPageCount = 3;
  const generatePaginationLinks = () => {
    const paginationLinks = [];
    const leftEllipsis = currentPage > 2;
    const rightEllipsis = currentPage < pageCount - 1;

    for (let i = 1; i <= pageCount; i++) {
      if (
        i === 1 ||
        i === pageCount ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        paginationLinks.push(
          <PaginationLink
            key={i}
            onClick={() => changePage(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>,
        );
      }
    }

    if (leftEllipsis) {
      paginationLinks.splice(1, 0, <PaginationEllipsis key="left" />);
    }
    if (rightEllipsis) {
      paginationLinks.splice(
        paginationLinks.length - 1,
        0,
        <PaginationEllipsis key="right" />,
      );
    }

    return paginationLinks;
  };

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    onSelectNewPage(page);
    // const params = new URLSearchParams(searchParams);
    // params.set("page", page.toString());
    // router.push("?" + params.toString());
  };
  return (
    <Pagination>
      <PaginationContent className="*:cursor-pointer">
        <Button
          variant="ghost"
          disabled={currentPage <= 1}
          onClick={() => changePage(currentPage - 1)}
          className="group"
        >
          <ChevronLeft className="transition-all delay-150 duration-300 group-hover:-translate-x-1" />{" "}
          Previous
        </Button>
        {generatePaginationLinks()}
        <Button
          variant="ghost"
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + 1)}
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
