import { Request, Response } from 'express';
import AppError from '../../errors/AppError';
import loginUserService from '../../services/users/loginUser.srvc';

const loginUserController = async (req: Request, res: Response) => {
  try {
    const token = await loginUserService(req.body);

    return res.status(200).json({ token });
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

export default loginUserController;
