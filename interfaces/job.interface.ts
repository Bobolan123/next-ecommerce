import { ISkill } from "./skill.interface";

//JOB
export interface IAllJob {
    statusCode: number;
    message: string;
    data: {
        jobs: IJob[];
        totalJobs: number;
        totalPages: number;
        page: number;
        limit: number;
    };
}

export interface IJob {
    id: number;
    name: string;
    description: string;
    skills: ISkill[]; // Assuming skills is an array of strings
    count: number;
    status: boolean;
    salary: number;
    timeDifference: string;
    location: string;
    level: string;
    startDate: string;
    endDate: string;
    company: {
        id: number;
        name: string;
        logo: {
            type: string;
            data: number[];
        };
        location: string;
    };
    created_at: string;
    updated_at: string;
}

export interface IUpdateJob {
    statusCode: number;
    message: string;
    data: IJob;
}
