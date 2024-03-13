"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IResume } from "@/type";
import ResumeModel from "./resumeModel";

interface IResumeProps {
  resumes: IResume[];
}

export default function ResumeTable(props: IResumeProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Job</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">CreatedAt</TableCell>
            <TableCell align="left">UpdatedAt</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.resumes.map((resume) => (
            <TableRow
              key={resume.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="resume">
                {resume.id}
              </TableCell>
              <TableCell align="left">{resume.status}</TableCell>
              <TableCell align="left">{resume.job.name}</TableCell>
              <TableCell align="left">{resume.job.company.name}</TableCell>
              <TableCell align="left">{resume.created_at}</TableCell>
              <TableCell align="left">{resume.updated_at}</TableCell>
              <TableCell align="left"><ResumeModel resume = {resume}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
