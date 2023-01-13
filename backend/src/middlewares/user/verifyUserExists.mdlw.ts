import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../../repositories';

const verifyUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  const user = await userRepository.findOneBy({ id });

  if (!user) return res.status(404).json({ message: 'User not found' });

  next();
};

export default verifyUserExistsMiddleware;
