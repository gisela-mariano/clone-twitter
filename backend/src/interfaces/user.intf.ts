export interface IReqCreateUser {
  name: string;
  email: string;
  password: string;
}

export interface IResCreateUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  created_at: string;
}
