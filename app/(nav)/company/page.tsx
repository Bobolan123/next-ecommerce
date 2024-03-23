import CompanyPagination from "@/components/_company/render-company-pagination";
import PaginationCompanyMUI from "@/components/_company/paginationCompany";
import { IAllCompany } from "@/components/_company/type";
import { Grid, Typography, Pagination, Stack } from "@mui/material";
import Image from "next/image";

export default async function Company({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const fetchAllCompanies = await fetch(
    `${process.env.API}/company/readCompanies`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  let fetchCompanies: IAllCompany = await fetchAllCompanies.json();
  const companies = fetchCompanies.data;

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "2";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = companies.slice(start, end);

  return (
    <div>
      <Typography className="mb-3" variant="h4">
        Top company
      </Typography>
      <Grid container spacing={4} justifyContent="center" className="mb-9">
        {entries.map((entry, index) => (
          <CompanyPagination company={entry} />
        ))}
      </Grid>
      <Stack alignItems="center">
        <PaginationCompanyMUI
          totalPage={companies.length}
          page={page}
          per_page={per_page}
        />
      </Stack>
    </div>
  );
}
