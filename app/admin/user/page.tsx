"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Container, TextField } from "@mui/material";
import CompanyTable from "@/components/_admin/company/companyTable";
import { useState } from "react";
import dynamic from "next/dynamic";

const UserModel = dynamic(
  () => import("../../../components/_admin/user/userModel"),
  { ssr: false }
);

export default function Company() {
  const [isOpenUserModel, setIsOpenUserModel] = useState(false);

  const handleUserModel = () => {
    setIsOpenUserModel(!isOpenUserModel);
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
              id="name"
              label="user name"
              variant="outlined"
            />
            Email:{" "}
            <TextField
              className="ml-3"
              size="small"
              id="email"
              label="email"
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
                List of Users
              </Typography>
              <Button variant="contained" onClick={handleUserModel}>
                Add
              </Button>
            </div>
            <UserModel
              isOpenUserModel={isOpenUserModel}
              handleUserModel={handleUserModel}
            />
            <CompanyTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
