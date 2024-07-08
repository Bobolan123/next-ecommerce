import RenderJobPagination from "@/components/_job/render-Job-pagination";
import PaginationMUI from "@/components/_job/paginationMUI";
import { IAllJob } from "@/components/_job/type";
import {
    Box,
    Button,
    CardActionArea,
    Grid,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import Link from "next/link";

export default async function Job({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const page = searchParams["page"] ?? "1";
    const per_page = searchParams["per_page"] ?? "1";

    const fetchJobs = await fetch(
        `${process.env.API}/job?page=${page}&limit=${per_page}`,
        {
            method: "GET",
            next: { tags: ["jobs"] },
        }
    );
    let resFetchJobs: IAllJob = await fetchJobs.json();

    const jobs = resFetchJobs.data;

    return (
        <div>
            <Typography
                className="mb-3"
                variant="h5"
                sx={{ fontWeight: "bold" }}
            >
                Jobs for developers
            </Typography>
            <Box
                sx={{
                    display: "grid",
                    gap: 1,
                    gridTemplateColumns: "repeat(1, 3fr)",
                    gridTemplateAreas: `"job location search"`,
                    marginBottom: 15,
                }}
            >
                <TextField
                    id="job"
                    label="Find fobs based skills"
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="location"
                    label="Location"
                    variant="outlined"
                    size="small"
                />
                <Button
                    color="primary"
                    id="search"
                    variant="contained"
                    size="small"
                >
                    Search
                </Button>
            </Box>
            <Typography className="mb-3" variant="h4">
                The popular recruitments
            </Typography>
            <div className="">
                <Grid container spacing={4} className="mb-9">
                    {jobs.jobs.map((job, index) => (
                        <Grid item xs={12} md={6}>
                            <CardActionArea>
                                <Link href={`/job/${job.id}`}>
                                    <RenderJobPagination job={job} />
                                </Link>
                            </CardActionArea>
                        </Grid>
                    ))}
                </Grid>
                <Stack alignItems="center">
                    <PaginationMUI
                        totalPages={resFetchJobs.data.totalPages}
                        page={page}
                        per_page={per_page}
                    />
                </Stack>
            </div>
        </div>
    );
}
