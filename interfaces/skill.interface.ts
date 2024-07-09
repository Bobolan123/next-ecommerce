import { IJob } from "./job.interface";

// SKILL
export interface ISkill {
    id: number;
    name: string;
    skills: IJob[]
}

export interface IReadSkills {
    statusCode: number;
    message: string;
    data: ISkill[];
}
