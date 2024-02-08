import JobPagination from "@/components/_job/Job-pagination";
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

export default async function Job({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const fetchJobs = await fetch(`${process.env.API}/job/readAllJobs`, {
    method: "GET",
  });
  let job: IAllJob = await fetchJobs.json();
  const jobs = job.data;

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "2";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = jobs.slice(start, end);
  return (
    <div>
      <Typography className="mb-3" variant="h5" sx={{ fontWeight: "bold" }}>
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
        <Button color="primary" id="search" variant="contained" size="small">
          Search
        </Button>
      </Box>
      <Typography className="mb-3" variant="h4">
        The popular recruitments
      </Typography>
      <div className="">
        <Grid container spacing={4} className="mb-9">
          {entries.map((entry, index) => (
            <Grid item xs={12} md={6} >
              <CardActionArea component="a" href="#">
                <JobPagination job={entry} />
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
        <Stack alignItems="center">
          <PaginationMUI
            totalPage = {jobs.length}
            page={page}
            per_page = {per_page}
          />
        </Stack>
      </div>
    </div>
  );
}
