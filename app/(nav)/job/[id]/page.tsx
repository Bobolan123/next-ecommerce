"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { CiDollar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { useState } from "react";
import ShowModel from "@/components/_job/specificJob/ShowModel";

const post = {
  title: "Junier developer react nest node",
  location: "Hanoi",
  salary: "1220 $",
  image: "https://source.unsplash.com/random?wallpapers",
  company: "Tiki",
  date: "10 days",
};

export default function SpecificJob(props: any) {
  const { params } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Grid container component="main" rowGap={3} spacing={2}>
        <Grid item xs={12} sm={9} md={9}>
          <Typography component="h1" variant="h5">
            {post.title}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="mb-10"
            onClick={() => showModal()}
          >
            Apply now
          </Button>
          <Typography variant="subtitle1">
            <CiDollar className="inline mr-1" />
            {post.salary}
          </Typography>
          <Typography variant="subtitle1">
            <CiLocationOn className="inline mr-1" />
            {post.title}
          </Typography>
          <Typography className="mb-10" variant="subtitle1">
            <CiClock1 className="inline mr-1" />
            {post.date}
          </Typography>
          <hr />
          <Typography
            component="h1"
            variant="h3"
            style={{ overflowWrap: "break-word" }}
          >
            Description
          </Typography>
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
            image={post.image}
          />

          <Typography
            component="h2"
            variant="h5"
            align="center"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {post.company}
          </Typography>
        </Grid>
      </Grid>

        {isModalOpen && <ShowModel isModalOpen={isModalOpen} showModel = {showModal}/>}
    </>
  );
}
