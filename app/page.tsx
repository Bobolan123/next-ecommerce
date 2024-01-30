import ResponsiveAppBar from "@/components/Navbar";
import CompanyAlbum from "@/components/_home/company.album";
import JobsAlbum from "@/components/_home/jobs-album";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Company from "./(nav)/company/page";
import ModelProfile from "@/components/_profile/modelProfile/ModelProfile";
export default function Home() {
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
        <div className="align-middle">
          <CompanyAlbum/>
          <JobsAlbum/>
        </div>
      </Container>
    </>
  );
}
