"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import dynamic from "next/dynamic";
import ResumeTable from "@/components/_admin/resume/resumeTable";


const ResumeModel = dynamic(
  () => import("../../../components/_admin/resume/resumeModel"),
  { ssr: false }
);

export default function Company() {
  const [isOpenResumeModel, setIsOpenResumeModel] = useState(false);

  const handleResumeModel = () => {
    setIsOpenResumeModel(!isOpenResumeModel);
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
                List of Resumes
              </Typography>
              <Button variant="contained" onClick={handleResumeModel}>
                Add
              </Button>
            </div>
            <ResumeModel
              isOpenResumeModel={isOpenResumeModel}
              handleResumeModel={handleResumeModel}
            />
            <ResumeTable/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
