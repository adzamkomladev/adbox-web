export interface UsersRequest {
    page?: number;
    size?: number;
}

export interface UsersResponse {
    users: User[];
    total: number;
    page: number;
    size: number;
    totalPages: number;
}

export interface User {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    role: Role;
    wallet: null;
    campaign: null;
    name: string;
    avatar: string;
    email: string;
    dateOfBirth: null;
    sex: null;
    roleTitle: string;
    status: string;
}

export interface Role {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    code: string;
}
