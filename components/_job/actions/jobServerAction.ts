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

export async function fetchCreateResume(data: any, cvFile: any) {
  try {
    const res = await fetch(`http://localhost:3001/api/resume/create`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    const newResume = await res.json();
    if (newResume.statusCode === 200) {
      const updatedResume = await uploadCV(newResume.data.id, cvFile);
      return updatedResume;
    } else {
      throw new Error(`Error creating resume: ${newResume.message}`);
    }
  } catch (error) {
    console.error("Error creating or updating resume:", error);
    throw error; // rethrow the error for the caller to handle
  }
}

export const uploadCV = async (id: any, cvFile: any) => {
  try {
    const res = await fetch(`http://localhost:3001/api/resume/uploadCVFile/${id}`, {
      method: "PATCH",
      body: cvFile,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error uploading CV file:", error);
    throw error; // rethrow the error for the caller to handle
  }
};

