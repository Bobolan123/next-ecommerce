import JobsAlbum from "@/components/_home/jobs-album";
import JobPagination from "@/components/_job/Job-pagination";
import { Box, Button, Pagination, TextField, Typography } from "@mui/material";

export default function Job() {
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
      <JobPagination />
    </div>
  );
}
