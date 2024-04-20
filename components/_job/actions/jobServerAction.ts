import { getJwt } from "@/components/actions/serverActionAll";

interface IJWT {
  id: number;
  email: string;
  role: string;
}
export const endcodeJwt = async (jwt: string) => {
  const data = await fetch(`http://localhost:3001/api/auth/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const user: IJWT = await data.json();
  return user;
};

export async function fetchCreateResume(data: any) {
  try {
    const jwt = await getJwt();

    const res = await fetch(`http://localhost:3001/api/resume/createCV`, {
      headers: {
        Authorization: `Bearer ${jwt?.value}`,
      },
      method: "POST",
      body: data,
    });

    const newResume = await res.json();
    if (newResume.statusCode === 200) {
      return newResume;
    } else {
      throw new Error(`Error creating resume: ${newResume.message}`);
    }
  } catch (error) {
    console.error("Error creating or updating resume:", error);
    throw error; // rethrow the error for the caller to handle
  }
}
