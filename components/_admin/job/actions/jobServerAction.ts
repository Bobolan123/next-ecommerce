"use server";

import { revalidateTag } from "next/cache";
import { IAllJob, IUpdateJob } from "@/type";

export async function fetchCreateJob(data: any) {
  const res = await fetch(`${process.env.API}/job/create`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("jobs");
  const newJob: IAllJob = await res.json();
  return newJob.data;
}

export async function fetchUpdateJob(data: any, id: any) {

  const res = await fetch(`${process.env.API}/job/update/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify(data),
  });

  revalidateTag("jobs");


  const newJob: IUpdateJob = await res.json();
  return newJob.data;
}

export const deleteJob = async (id: number) => {
  await fetch(`http://localhost:3001/api/job/delete/${id}`, {
    method: "DELETE",
  });

  revalidateTag('jobs')
};

export const fetchJobById = async (id: number) => {
  const data = await fetch(`http://localhost:3001/api/job/read/${id}`, {
    method: "GET",
  });
  const job = await data.json()
  
  return job.data
};
