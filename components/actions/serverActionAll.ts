'use server'

import { cookies } from "next/headers";

export const endcodeJWT = async () => {
  const cookieStore = cookies();
  const jwt = cookieStore.get("jwt");
  const res = await fetch(`${process.env.API}/auth/profile/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt?.value}`,
    },
  });
  const user = await res.json()
  return user
};

export const getJwt = async () => {
  const cookieStore = await cookies();
  const jwt = await cookieStore.get("jwt");
  return jwt // {name, value: jwt,path}
}