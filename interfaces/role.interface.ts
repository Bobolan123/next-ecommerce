import { IApi } from "./api.interface";
import { IUser } from "./user.interface";

// ROLE
export interface IRole {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    apis: IApi[];
    users: IUser[];

}

export interface IReadAllRole {
    statusCode: number;
    message: string;
    data: IRole[];
}
