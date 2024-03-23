"use server";

import { IAllCompany } from "@/components/_company/type";
import { getJwt } from "@/components/actions/serverActionAll";
import { revalidateTag } from "next/cache";

export async function fetchCreateCompany(data: any) {
  const jwt = await getJwt();
  const res = await fetch(`http://localhost:3001/api/company/create`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  revalidateTag("list-companies");

  const newCompany: IAllCompany = await res.json();
  return newCompany.data;
}

export async function fetchUpdateCompany(data: any, id: any) {
  const res = await fetch(`${process.env.API}/company/update/${id}`, {
    method: "PATCH",
    body: data,
  });

  revalidateTag("list-companies");

  const newCompany: IAllCompany = await res.json();
  return newCompany.data;
}

export const deleteCompany = async (id: number) => {
  await fetch(`http://localhost:3001/api/company/delete/${id}`, {
    method: "DELETE",
  });

  revalidateTag("list-companies");
};
