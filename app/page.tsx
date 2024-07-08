import ResponsiveAppBar from "@/components/Navbar";
import CityInput from "@/components/_home/cityInput";
import CompanyAlbum from "@/components/_home/company.album";
import JobsAlbum from "@/components/_home/jobs-album";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default async function Home() {
  const fetchCompanies = await fetch(
    `${process.env.API}/company?page=1&limit=4`,
    {
      method: "GET",
      next: { tags: ['companies'] }
    }
  );
  const companies = await fetchCompanies.json();

  const fetchJobs = await fetch(`${process.env.API}/job?page=1&limit=4`, {
    method: "GET",
    next: { tags: ['jobs'] },
  });
  let jobs = await fetchJobs.json();

  return (
    <>
      <ResponsiveAppBar />
      <Container className="mt-5">
        <Typography className="mb-3" variant="h5" sx={{ fontWeight: "bold" }}>
          Jobs for developer
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

          <CityInput />
          
          <Button color="primary" id="search" variant="contained" size="small">
            Search
          </Button>
        </Box>
        <div className="align-middle">
          <CompanyAlbum companies={companies.data.companies} />
          <JobsAlbum jobs={jobs.data.jobs} />
        </div>
      </Container>
    </>
  );
}
