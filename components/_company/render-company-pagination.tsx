"use client";

import { CardMedia, CardContent, Grid, Card, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const RenderCompanyPagination = (props: any) => {
  const company = props.company;

  return (
    <>
      <Grid item key={company} md={3}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <Link
            href={`/company/${company.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardMedia
              component="div"
              sx={{
                pt: "56.25%",
                height: 250,
                alignSelf: "center",
              }}
              image={`/logos/${company.filename}`}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {company.name}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </Grid>
    </>
  );
};

export default RenderCompanyPagination;
