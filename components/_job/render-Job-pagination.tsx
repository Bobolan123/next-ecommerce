"use client";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { IJob } from "./type";
import { useState, useEffect } from "react";

export default function RenderJobPagination(props: any) {
  const job: IJob = props.job;

  const [logo, setLogo] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/api/company/logo/${job.company.id}`, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.blob();
      })
      .then((blob) => {
        const imgUrl = URL.createObjectURL(blob);
        setLogo(imgUrl);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [job]);

  return (
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
        image={logo}
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
          $ {job.salary}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" align="right">
          10 days ago
        </Typography>
      </CardContent>
    </Card>
  );
}
