import CompanyPagination from "@/components/_company/render-company-pagination";
import PaginationCompanyMUI from "@/components/_company/paginationCompany";
import { Grid, Typography, Pagination, Stack } from "@mui/material";
import Image from "next/image";
import { IAllCompany } from "@/interfaces/company.interface";

export default async function Company({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const page = searchParams["page"] ?? "1";
    const per_page = searchParams["per_page"] ?? "3 ";

    const fetchAllCompanies = await fetch(
        `${process.env.API}/company?page=${page}&limit=${per_page}`,
        {
            method: "GET",
            next: { tags: ["companies"] },
        }
    );
    let fetchCompanies: IAllCompany = await fetchAllCompanies.json();
    const companies = fetchCompanies.data;

    return (
        <div>
            <Typography className="mb-3" variant="h4">
                Top company
            </Typography>
            <Grid
                container
                spacing={4}
                justifyContent="center"
                className="mb-9"
            >
                {companies.companies.map((company, index) => (
                    <CompanyPagination company={company} />
                ))}
            </Grid>
            <Stack alignItems="center">
                <PaginationCompanyMUI
                    totalPage={companies.totalPages}
                    page={page}
                    per_page={per_page}
                />
            </Stack>
        </div>
    );
}
