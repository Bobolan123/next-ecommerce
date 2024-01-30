"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import CompanyTable from "@/components/_admin/company/companyTable";
import { useState } from "react";
import dynamic from 'next/dynamic'
 
const CompanyModel = dynamic(() => import('../../../components/_admin/company/companyModel'), { ssr: false })

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export default function Company() {
    const [isOpenCompanyModel, setIsOpenCompanyModel] = useState(false)

    const handleCompanyModel = () => {
        setIsOpenCompanyModel(!isOpenCompanyModel)
    }
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <div className="flex justify-between mb-5">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            List of companies
          </Typography>
          <Button variant="contained" onClick={handleCompanyModel}>Add</Button>
        </div>
        <CompanyModel isOpenCompanyModel = {isOpenCompanyModel} handleCompanyModel = {handleCompanyModel} />
        <CompanyTable/>
      </Paper>
    </Grid>
  );
}
