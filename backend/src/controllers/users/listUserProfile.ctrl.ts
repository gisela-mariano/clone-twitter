import { Request, Response } from 'express';
import AppError from '../../errors/AppError';
import listUserProfileService from '../../services/users/listUserProfile.srvc';

const listUserProfileController = async (req: Request, res: Response) => {
  try {
    const profile = await listUserProfileService(req.params.id);

    return res.status(200).json(profile);
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

export default listUserProfileController;
