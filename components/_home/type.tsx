export interface IJob {
    id: number;
    name: string;
    description: string;
    skills: string[]; // Assuming skills is an array of strings
    count: number;
    status: string;
    salary: number;
    timeDifference: string;
    company: ICompany;
}

export interface ICompany {
    id: number;
    name: string;
    description: string;
    logo: {
        type: string;
        data: number[]; // Assuming data is an array of numbers
    };
    location: string;
    filename: string;
}

export interface IRESCOMPANY {
    statusCode: number;
    message: string;
    data: ICompany;
}
