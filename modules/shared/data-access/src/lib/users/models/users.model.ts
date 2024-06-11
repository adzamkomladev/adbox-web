import { Role } from "./roles.model";

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

export interface CreateAdminRequest {
    firstName: string;
    lastName: string;
    email: string;
    roleTitle?: string;
    avatar?: string;
    roleId: string;
}