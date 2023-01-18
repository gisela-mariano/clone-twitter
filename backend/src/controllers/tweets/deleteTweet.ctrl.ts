import { Request, Response } from 'express';
import AppError from '../../errors/AppError';
import deleteTweetService from '../../services/tweets/deleteTweet.srvc';

const deleteTweetController = async (req: Request, res: Response) => {
  try {
    await deleteTweetService(req.params.id);

    return res.status(204).send();
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

export default deleteTweetController;
