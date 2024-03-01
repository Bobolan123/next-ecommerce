"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GoPencil } from "react-icons/go";
import { Button } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { ICompany } from "../type";
import { useEffect, useState } from "react";
import UpdateCompanyModel from "./updateCompany.button";
import dynamic from "next/dynamic";

export default function CompanyTable(props: any) {
  const [companies, setCompanies] = useState(props.companies);
  const UpdateCompanyButton = dynamic(() => import('./updateCompany.button'), {
    ssr: false
  })
  const handleDeleteCompany = async (id: number) => {
    try {
      const deleteCompany = await fetch(
        `http://localhost:3001/api/company/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      // Optimistically update the UI
      if (deleteCompany) {
        setCompanies(
          companies.filter((company: ICompany) => company.id !== id)
        );
      }
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  return (
    <>
      <TableBody>
        {companies.map((company: ICompany) => (
          <TableRow
            key={company.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="company">
              {company.id}
            </TableCell>
            <TableCell>{company.name}</TableCell>
            <TableCell>{company.location}</TableCell>
            <TableCell>{company.created_at}</TableCell>
            <TableCell>{company.updated_at}</TableCell>
            <TableCell className="flex">

              <UpdateCompanyButton id = {company.id}/>

              <Button
                className="m-0"
                onClick={() => {
                  handleDeleteCompany(company.id);
                }}
              >
                <MdDeleteOutline color="red" size={20} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}
