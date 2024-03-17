"use server";

import { revalidateTag } from "next/cache";
import { IAllCompany, IReadPermission, IReadSkills, IApi } from "@/type";


export async function fetchAllApi() {
  const fetchAllPermission = await fetch(
    `${process.env.API}/api/read`,
    {
      method: "GET",
      next: { tags: ["apis"] },
      cache: 'no-store'
    }
  );
  let fetchPermission: any = await fetchAllPermission.json();
  const apis = fetchPermission.data;
  return apis
} 

export async function fetchCreateApi(data: any) {
    const res = await fetch(`${process.env.API}/api/create`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });


  revalidateTag("apis");
  const newApi = await res.json();
  return newApi;
}

export async function fetchUpdateApi(data: any, id: any) {

  const res = await fetch(`http://localhost:3001/api/api/update/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify(data),
  });

  revalidateTag("apis");
  const newApi = await res.json();
  return newApi;
}

export const deleteApi = async (id: number) => {
  await fetch(`http://localhost:3001/api/api/delete/${id}`, {
    method: "DELETE",
  });

  revalidateTag('apis')
};

export const fetchApiById = async (id: number) => {
  const data = await fetch(`http://localhost:3001/api/api/read/${id}`, {
    method: "GET",
  });
  const api = await data.json()
  
  return api.data
};
