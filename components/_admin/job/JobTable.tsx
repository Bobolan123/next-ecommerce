"use client";

import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import dynamic from "next/dynamic";
import { IJob } from "@/type";
import { deleteJob } from "./actions/jobServerAction";
import { toast } from "react-toastify";

export default function JobTable(props: any) {

  console.log(props.jobs)
  const UpdateJobButton = dynamic(() => import("./updateJob.button"), {
    ssr: false,
  });

  const handleDeleteJob = async (id: number) => {
    try {
      await deleteJob(id);
      toast.success("Job deleted successfully");
    } catch (error: any) {
      toast.error("Error deleting job: " + error.message);
    }
  };

  return (
    <>
      <TableBody>
        {props.jobs.map((job: IJob) => (
          <TableRow
            key={job.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="job"> 
              {job.id}
            </TableCell>
            <TableCell>
              {job.name}
            </TableCell>
            <TableCell>{job.created_at}</TableCell>
            <TableCell>{job.updated_at}</TableCell>
            <TableCell className="flex">
              <UpdateJobButton id={job.id} />
              <Button
                className="m-0"
                onClick={() => {
                  handleDeleteJob(job.id);
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
