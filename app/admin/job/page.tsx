"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState } from "react"; 
import RoleTable from "@/components/_admin/role/roleTable";

export default function Company() {

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <div className="flex justify-between mb-5">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            List of Jobs
          </Typography>
      </div>
        <RoleTable/>
      </Paper>
    </Grid>
  );
}
