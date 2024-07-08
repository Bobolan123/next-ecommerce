"use server";

interface UserLoginResponse {
    statusCode: number;
    message: string;
    data: UserData;
}

interface UserData {
    email: string;
    name: string;
    id: number;
    role: string;
    access_token: string;
}

const loginAuth = async (data: { username: string; password: string }) => {
    const res = await fetch(`${process.env.API}/auth/login`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    });

    if (res.ok) {
        const jwt: UserLoginResponse = await res.json();
        return jwt.data.access_token;
    } else {
        throw new Error("Login request failed");
    }
};

export { loginAuth };
