"use client";

import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { ICompany } from "../type";

import dynamic from "next/dynamic";
import { deleteCompany } from "./actions/companyServerAction";

export default function CompanyTable(props: any) {
  const UpdateCompanyButton = dynamic(() => import('./updateCompany.button'), {
    ssr: false
  })
  const handleDeleteCompany = async (id: number) => {
    try {
      await deleteCompany(id)
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  return (
    <>
      <TableBody>
        {props.companies.map((company: ICompany) => (
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
