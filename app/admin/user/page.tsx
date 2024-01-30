"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import CompanyTable from "@/components/_admin/company/companyTable";
import { useState } from "react";
import dynamic from 'next/dynamic'
 
const UserModel = dynamic(() => import('../../../components/_admin/user/userModel'), { ssr: false })


export default function Company() {
    const [isOpenUserModel, setIsOpenUserModel] = useState(false)

    const handleUserModel = () => {
        setIsOpenUserModel(!isOpenUserModel)
    }
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <div className="flex justify-between mb-5">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            List of Users
          </Typography>
          <Button variant="contained" onClick={handleUserModel}>Add</Button>
        </div>
        <UserModel isOpenUserModel = {isOpenUserModel} handleUserModel = {handleUserModel} />
        <CompanyTable/>
      </Paper>
    </Grid>
  );
}
