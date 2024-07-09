//API
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

