export interface KycRequest {
  page?: number;
  size?: number;
}

export interface ApiResponse {
  status: number;
  success: boolean;
  message: string;
  data: KycResponse;
}

export interface KycResponse {
  kycs: Kyc[];
  total: number;
  page: number;
  size: number;
  totalPages: number;
}

export interface Kyc {
  id: string;
  createdAt: string;
  updatedAt: string;
  user: KycUser;
  level: number;
  country: string;
  identity: Identity | null;
  business: any; // Since its type is 'any' it can be anything
  attempts: Attempt[];
}

export interface KycUser {
  id: string;
  createdAt: string;
  updatedAt: string;
  role: KycRole;
  kyc: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  phone: string | null;
  phoneVerifiedAt: string | null;
  dateOfBirth: string;
  sex: string;
  roleTitle: string;
  status: string;
}

export interface KycRole {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  code: string;
}

export interface Identity {
  type: number;
  level: number;
  idType: string;
  front: string;
  back: string;
  combined: string;
}

export interface Attempt {
  id: string;
  createdAt: string;
  updatedAt: string;
  kyc: string;
  updatedBy: string | null;
  status: string;
  level: number;
  reason: string | null;
  details: Details;
}

export interface Details {
  type: number;
  level: number;
  idType: string;
  front: string;
  back: string;
  combined: string;
}
