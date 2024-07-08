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

