"use server";

import { IUser } from "@/type";

export interface IUpdatePassword {
  password: string;
  newPassword: string;
  id: number;
}

interface IResponse {
  statusCode: number;
  message: string;
  data: IUser | {};
}

export const changePassword = async (data: IUpdatePassword): Promise<IResponse> => {
  try {
    const res = await fetch(`${process.env.API}/user/updatePassword/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(data),
    });
    
    const responseData = await res.json(); // Assuming response is JSON

    return responseData;
  } catch (error) {
    // Handle error appropriately
    console.error("Error:", error);
    throw error; // Re-throwing the error for the caller to handle
  }
};
