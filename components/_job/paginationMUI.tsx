"use client";

import { Pagination } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";


const PaginationMUI = (props:any) => {
  const router = useRouter();
  const searchParams: any = useSearchParams();

  const page = searchParams.get["page"] ?? "1";
  const per_page = searchParams.get["per_page"] ?? "2";

  const handleChangePage = (event: any, nextPageClick: number) => {
    router.push(`/job/?page=${Number(nextPageClick)}&per_page=${per_page}`);
  };

  return (
    <Pagination
      count={Math.ceil(props.totalPage / Number(per_page))}
      onChange={(event, pageNumber) => handleChangePage(event, pageNumber)}
      defaultPage={Number(page)}
      color="primary"
      
    />
  );
}

export default PaginationMUI