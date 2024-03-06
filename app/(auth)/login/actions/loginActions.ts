'use server'


interface UserAccount {
    username: string;
    password: string;
}

interface UserData {
    email: string;
    name: string;
    id: number;
    access_token: string;
    refresh_token: string;
}

const loginAuth = async (data: UserAccount) => {
    const res = await fetch(`${process.env.API}/auth/login`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    });

    if (res.ok) { // Check if the request was successful
        const jwt: UserData = await res.json();
        return jwt
    } else {
        // Handle error here if needed
        console.error('Login request failed');
    }
}

export { loginAuth };
