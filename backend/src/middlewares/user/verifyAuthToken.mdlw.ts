import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IDecodedToken } from '../../interfaces';

const verifyAuthTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;

  if (!token)
    return res.status(400).json({ message: 'Missing authorization token' });

  const splitedToken = token.split(' ')[1];

  jwt.verify(splitedToken, String(process.env.SECRET_KEY), (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });

    req.params.id = (decoded as IDecodedToken).id;

    next();
  });
};

export default verifyAuthTokenMiddleware;
