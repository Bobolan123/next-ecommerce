import { ICompany } from "./company.interface";
import { IResume } from "./resume.interface";
import { IRole } from "./role.interface";

// USER
export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
    location: string;
    gender: string;
    created_at: string;
    updated_at: string;
    resumes: IResume[];
    role: IRole;
    company: ICompany
}

export interface IAllUser {
    statusCode: number;
    message: string;
    data: IUser[];
}

export interface IUserRes {
    statusCode: number;
    message: string;
    data: IUser;
}

export interface IUpdateUser {
    statusCode: number;
    message: string;
    data: IUser;
}