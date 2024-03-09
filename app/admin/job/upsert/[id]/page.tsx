import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Container, TextField } from "@mui/material";
import IdFormUpsert from "@/components/_admin/job/IdFormUpsert";

export default function IdUpsertJob() {
  
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <div className="flex justify-between mb-5">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Upsert Job
              </Typography>
            </div>
            <IdFormUpsert />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
