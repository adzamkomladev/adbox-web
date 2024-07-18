interface KYCRequest {
    page?: number;
    size?: number;
}

interface KYCResponse {
    kycs: KYC[];
    total: number;
    page: number;
    size: number;
    totalPages: number;
}


export interface KYCAttempt {
    id: string;
    createdAt: string;
    updatedAt: string;
    kyc: string;
    updatedBy: null | string;
    status: string;
    level: number;
    reason: null | string;
    details: {
      type: number;
      level: number;
      idType: string;
      front: string;
      back: string;
      combined: string;
    };
  }
  
 export interface kycUser {
    id: string;
    createdAt: string;
    updatedAt: string;
    role: {
      id: string;
      createdAt: string;
      updatedAt: string;
      name: string;
      description: string;
      code: string;
    };
    kyc: string;
    firstName: string;
    lastName: string;
    avatar: string;
    email: string;
    phone: null | string;
    phoneVerifiedAt: null | string;
    dateOfBirth: string;
    sex: string;
    roleTitle: string;
    status: string;
    age: number;
  }
  
  interface KYC {
    id: string;
    createdAt: string;
    updatedAt: string;
    user: kycUser;
    level: number;
    country: string;
    identity: Identity;
    business: null | object;
    attempts: KYCAttempt[];
  }
 interface Identity{
    atempt:number;
    idType:string;
    front:string;
    back:string;
    combined:string;
  }

  export {KYC,KYCRequest,KYCResponse};
  