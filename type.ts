//Company
export interface ICompany {
    id: number;
    name: string;
    description: string;
    logo: {
        type: string;
        data: number[]; // Assuming the logo data is represented as an array of numbers
    };
    location: string;
    filename: string;
    created_at:string;
    updated_at:string
}

export interface IAllCompany {
    statusCode: number;
    message: string;
    data: ICompany[];
}


  export interface ICompany {
    id: number;
    name: string;
    description: string;
    logo: {
        type: string;
        data: number[];
    };
    location: string;
}


//JOB
export interface IAllJob {
    statusCode: number;
    message: string;
    data: IJob[];
}

export interface IJob {
    id: number;
    name: string;
    description: string;
    skills: ISkill[]; // Assuming skills is an array of strings
    count: number;
    status: boolean;
    salary: number;
    timeDifference:string;
    location:string;
    level:string
    startDate: string,
    endDate:string,
    company: {
      id:number,
      name:string,
      logo: {
          type: string,
          data: number[],
      },
      location: string
    }
    created_at: string;
    updated_at: string;

  }
  
  export interface IUpdateJob {
    statusCode: number;
    message: string;
    data: IJob;
}

  
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


// API
export interface IApi {
    id: number;
    endpoint: string;
    description: string;
    module: string;
    method: string;
    created_at:string
    updated_at: string;
}


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


// API
export interface IApi {
    id: number;
    endpoint:string
    description:string
    module: string;
    method: string;
}

export interface IReadPermission {
    statusCode: number;
    message: string;
    data: IApi[];
}


