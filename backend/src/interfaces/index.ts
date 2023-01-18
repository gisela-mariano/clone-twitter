import { Request } from 'express';

export interface IDecodedToken {
  id: string;
  name: string;
  iat: number;
  exp: number;
}

export interface IInfosToken {
  id: string;
  name: string;
}

export interface IModifiedRequest extends Request {
  decodedToken?: IInfosToken;
}
