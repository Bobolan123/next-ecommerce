import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";



export default function Dashboard() {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <div className="flex justify-between mb-5">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Jobs for developer
          </Typography>
          <Button variant="contained">Add</Button>
        </div>
        upsert job
      </Paper>
    </Grid>
  );
}
