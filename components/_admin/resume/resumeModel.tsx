"use client";

import React, { useState } from "react";
import { Modal, Select } from "antd";
import "react-quill/dist/quill.snow.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const row = {
  email: "lan",
  status: "PENDING",
  job: "react",
  companyName: "tiktok",
  createdDate: "12/2/23",
  updatedDate: "12/31/24",
};

interface IModelResumeProps {
  id:any
}

const ResumeModel: React.FC<IModelResumeProps> = (props: any) => {
  const [value, setValue] = useState("");
  const [isOpenResumeModel, setIsOpenResumeModel] = useState(false);

  const handleResumeModel = () => {
    setIsOpenResumeModel(!isOpenResumeModel);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleResumeModel}>
        Add
      </Button>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Resume Information adsf"
        centered
        okText="Change Status"
        open={isOpenResumeModel}
        onOk={() => handleResumeModel()}
        onCancel={() => handleResumeModel()}
        style={{ maxWidth: "calc(100% - 320px)", marginLeft: "160px" }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 50 }} aria-label="simple table">
            <TableBody>
              <TableRow key="email" className="bg-slate-200">
                <TableCell component="th" scope="row">
                  Email
                </TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
              <TableRow
                key="email"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="center">
                  <Select
                    defaultValue="admin"
                    onChange={handleChange}
                    options={[
                      { value: "pending", label: "PENDING" },
                      { value: "reviewing", label: "REVIEWING" },
                      { value: "approved", label: "APPROVED" },
                      { value: "rejected", label: "REJECTED" },
                    ]}
                  />
                </TableCell>
              </TableRow>

              <TableRow key="email" className="bg-slate-200">
                <TableCell component="th" scope="row">
                  Job Name
                </TableCell>
                <TableCell align="center">Resume Name</TableCell>
              </TableRow>
              <TableRow key="email">
                <TableCell component="th" scope="row">
                  {row.job}
                </TableCell>
                <TableCell align="center">{row.companyName}</TableCell>
              </TableRow>
              <TableRow key="email" className="bg-slate-200">
                <TableCell component="th" scope="row">
                  Created Date
                </TableCell>
                <TableCell align="center">Updated Date</TableCell>
              </TableRow>
              <TableRow key="email">
                <TableCell component="th" scope="row">
                  {row.createdDate}
                </TableCell>
                <TableCell align="center">{row.updatedDate}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Modal>
    </div>
  );
};

export default ResumeModel;
