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


export interface IAllJob {
    statusCode: number;
    message: string;
    data: IJob[];
}

export interface IJob {
    id: number;
    name: string;
    description: string;
    skills: string[]; // Assuming skills is an array of strings
    count: number;
    status: string;
    salary: number;
    timeDifference:string
    company: {
      id:number,
      logo: {
          type: string,
          data: number[],
      },
      location: string
    }
  }
  

  
export interface IResume {
    id: number;
    status: string;
    created_at: string;
    updated_at: string;
    user: IUser;
    job: any;
}

export interface IRole {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    apis: IApi[];
    users: IUser[];

}

export interface IApi {
    id: number;
    endpoint: string;
    description: string;
}

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

export interface IUpdateUser {
    statusCode: number;
    message: string;
    data: IUser;
}