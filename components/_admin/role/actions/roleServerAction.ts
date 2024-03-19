"use server";

import { revalidateTag } from "next/cache";
import { IAllCompany, IReadAllRole, IReadSkills, IRole } from "@/type";

export async function fetchAllRole() {
  const fetchAllRole = await fetch(`${process.env.API}/role/read`, {
    method: "GET",
    next: { tags: ["roles"] },
    cache: "no-store",
  });
  let fetchRole: any = await fetchAllRole.json();
  const roles = fetchRole.data;
  return roles;
}

export async function fetchCreateRole(data: any) {
  const res = await fetch(`${process.env.API}/role/create`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("roles");
  const newRole = await res.json();
  return newRole;
}

export async function fetchUpdateRole(data: any, id: any) {
  const res = await fetch(`http://localhost:3001/api/role/update/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify(data),
  });

  revalidateTag("roles");
  const newRole = await res.json();
  return newRole;
}

export const deleteRole = async (id: number) => {
  await fetch(`http://localhost:3001/api/role/delete/${id}`, {
    method: "DELETE",
  });

  revalidateTag("roles");
};

export const fetchRoleById = async (id: number) => {
  const data = await fetch(`http://localhost:3001/api/role/read/${id}`, {
    method: "GET",
  });
  const role = await data.json();

  return role.data;
};

export const fetchApiForRole = async () => {
  const data = await fetch(`http://localhost:3001/api/api/readForRole`, {
    method: "GET",
  });
  const apis = await data.json();

  return apis;
};


