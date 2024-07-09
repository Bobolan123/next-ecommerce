import { IJob } from "./job.interface";
import { IUser } from "./user.interface";

// RESUME
export interface IResume {
    id: number;
    status: string;
    created_at: string;
    updated_at: string;
    user: IUser;
    job: IJob;
    cvFile:string
}

export interface IReadResumes {
    statusCode: number;
    message: string;
    data: IResume[];
}
