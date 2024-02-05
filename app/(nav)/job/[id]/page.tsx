import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { CiDollar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import ApplyButton from "@/components/_job/specificJob/apply.button";

function calculateTimeLeft(created_at:any) {
  const createdAtDate = new Date(created_at) as any;
  const currentDate = new Date() as any;
  const timeDifference = createdAtDate - currentDate;
  const daysDifference = Math.abs(Math.ceil(timeDifference / (1000 * 60 * 60 * 24)));
  const hoursDifference = Math.abs(Math.ceil(timeDifference / (1000 * 60 * 60)));
  const minutesDifference = Math.abs(Math.ceil(timeDifference / (1000 * 60)));

  return { daysDifference, hoursDifference, minutesDifference };
}

export default async function SpecificJob(props: any) {
  const { params } = props;
  const fetchJob = await fetch(`${process.env.API}/job/readJob/${params.id}`);
  const job = await fetchJob.json();

  const { daysDifference, hoursDifference, minutesDifference } = calculateTimeLeft(job.created_at);
  let timeLeft;

  if (daysDifference > 0) {
    timeLeft = `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
  } else if (hoursDifference > 0) {
    timeLeft = `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
  } else {
    timeLeft = `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
  }  
  return (
    <>
      <Grid container component="main" rowGap={3} spacing={2}>
        <Grid item xs={12} sm={9} md={9}>
          <Typography component="h1" variant="h5">
            {job.name}
          </Typography>

          <ApplyButton />

          <Typography variant="subtitle1">
            <CiDollar className="inline mr-1" />
            {job.salary}
          </Typography>
          <Typography variant="subtitle1">
            <CiLocationOn className="inline mr-1" />
            {job.company.location}
          </Typography>
          <Typography className="mb-10" variant="subtitle1">
            <CiClock1 className="inline mr-1" />
            {timeLeft} 
          </Typography>
          <hr />
          <Typography
            component="h1"  
            variant="h3"
            style={{ overflowWrap: "break-word" }}
          >
            Description
          </Typography>
          <div>
            {job.description}
          </div>
        </Grid>
        <Grid item sm={3} md={3}>
          <CardMedia
            component="img"
            sx={{
              width: 140,
              height: 140,
              display: { xs: "none", sm: "block" },
              borderRadius: 100,
            }}
            className="mx-auto mb-3"
            image={`${process.env.API}/company/logo/${job.company.id}`}
          />

          <Typography
            component="h2"
            variant="h5"
            align="center"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {job.company.name}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
