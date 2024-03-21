"use server";

import { endcodeJWT } from "@/components/actions/serverActionAll";
import { ISkill, IUser } from "@/type";

interface IResponse {
  statusCode: number;
  message: string;
  data: ISkill[];
}

export const getAllSkills = async (): Promise<ISkill[]> => {
  try {
    const res = await fetch(`http://localhost:3001/api/skills/read`, {
      method: "GET",
    });

    const responseData = await res.json();
    return responseData.data;
  } catch (error) {
    // Handle error appropriately
    console.error("Error:", error);
    throw error; // Re-throwing the error for the caller to handle
  }
};

export const getEmail = async (data: number[]): Promise<any> => {
  try {
    const user = await endcodeJWT();
    let newData = { ids:data, email: user.email };
    const res = await fetch(`http://localhost:3001/api/skills/getEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    const responseData = await res.json();
    return responseData;
  } catch (error) {
    // Handle error appropriately
    console.error("Error:", error);
    throw error; // Re-throwing the error for the caller to handle
  }
};

export const getJobBySkills = async (data: any): Promise<IResponse> => {
  try {
    const res = await fetch(
      `${process.env.API}/user/updatePassword/${data.id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(data),
      }
    );

    const responseData = await res.json(); // Assuming response is JSON

    return responseData;
  } catch (error) {
    // Handle error appropriately
    console.error("Error:", error);
    throw error; // Re-throwing the error for the caller to handle
  }
};
