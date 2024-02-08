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
}

export interface IAllCompany {
    statusCode: number;
    message: string;
    data: ICompany[];
}
