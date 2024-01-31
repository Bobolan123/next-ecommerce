"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Container, TextField } from "@mui/material";
import CompanyTable from "@/components/_admin/company/companyTable";
import { useState } from "react";
import dynamic from "next/dynamic";

const CompanyModel = dynamic(
  () => import("../../../components/_admin/company/companyModel"),
  { ssr: false }
);

export default function Company() {
  const [isOpenCompanyModel, setIsOpenCompanyModel] = useState(false);

  const handleCompanyModel = () => {
    setIsOpenCompanyModel(!isOpenCompanyModel);
  };
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12}>
          <Paper
            sx={{
              gap: 1,
              p: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            Name:{" "}
            <TextField
              className="ml-3 mr-5"
              size="small"
              id="outlined-basic"
              label="company name"
              variant="outlined"
            />
            Address:{" "}
            <TextField
              className="ml-3"
              size="small"
              id="outlined-basic"
              label="location"
              variant="outlined"
            />
            <Button variant="contained" size="small">
              Search
            </Button>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <div className="flex justify-between mb-5">
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                List of companies
              </Typography>
              <Button variant="contained" onClick={handleCompanyModel}>
                Add
              </Button>
            </div>
            <CompanyModel
              isOpenCompanyModel={isOpenCompanyModel}
              handleCompanyModel={handleCompanyModel}
            />
            <CompanyTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
