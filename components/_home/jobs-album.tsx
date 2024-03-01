import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { IJob } from "./type";
import Link from "next/link";

export default function JobsAlbum(props: any) {
  const jobs: IJob[] = props.jobs;

  return (
    <>
      <Typography className="mb-3" variant="h5" sx={{ fontWeight: "bold" }}>
        Top company
      </Typography>
      <Grid container spacing={4} className="mb-3">
        {jobs.map((job, index) => (
          <Grid item xs={12} md={6}>
            <Link href={`/job/${job.id}`}>
              <CardActionArea>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 80,
                      height: 80,
                      display: { xs: "none", sm: "block" },
                      alignSelf: "center",
                      borderRadius: 100,
                      marginLeft: 2,
                    }}
                    image={`${process.env.API}/company/logo/${job.company.id}`}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                      {job.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      <CiLocationOn className="inline mr-1" />
                      {job.company.location}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" paragraph>
                      {job.salary}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      align="right"
                    >
                      {job.timeDifference}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
