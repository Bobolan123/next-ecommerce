"use client";

import { CardMedia, CardContent, Grid, Card, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const RenderCompanyPagination = (props: any) => {
  const company = props.company;

  const [logo, setLogo] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/api/company/logo/${company.id}`, {
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
  }, []);
  return (
    <>
      <Grid item key={company} md={3}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <Link href={`/company/${company.id}`} style={{ textDecoration: "none", color: "black" }}>
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: "56.25%",
                height: 200,
              }}
              image={logo}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {company.name}
              </Typography>
              <Typography>{company.description}</Typography>
            </CardContent>
          </Link>
        </Card>
      </Grid>
    </>
  );
};

export default RenderCompanyPagination;
