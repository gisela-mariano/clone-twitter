import { Request, Response } from 'express';
import createUserService from '../../services/users/createUser.srvc';
import AppError from '../../errors/AppError';

const createUserController = async (req: Request, res: Response) => {
  try {
    const createdUser = await createUserService(req.body);

    return res.status(201).json(createdUser);
  } catch (err) {
    if (err instanceof AppError)
      return res.status(err.statusCode).json({
        message: err.message,
      });

    if (err instanceof Error)
      return res.status(400).json({
        message: err.message,
      });
  }
};

export default createUserController;
