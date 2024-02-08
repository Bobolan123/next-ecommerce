"use client";

import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";


const JobPaginationMUI = (props:any) => {
  const router = useRouter();

  const page = props.page?? "1";
  const per_page = props.per_page ?? "2";

  const handleChangePage = (event: any, nextPageClick: number) => {
    router.push(`/job/?page=${Number(nextPageClick)}&per_page=${per_page}`);
  };

  return (
    <Pagination
      count={Math.ceil(props.totalPage / Number(per_page))}
      onChange={(event, pageNumber) => handleChangePage(event, pageNumber)}
      page={Number(page)}
      color="primary"
    />
  );
}

export default JobPaginationMUI