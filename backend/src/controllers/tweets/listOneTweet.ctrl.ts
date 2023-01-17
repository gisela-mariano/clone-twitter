import { Request, Response } from 'express';
import AppError from '../../errors/AppError';
import listOneTweetService from '../../services/tweets/listOneTweet.srvc';

const listOneTweetController = async (req: Request, res: Response) => {
  try {
    const tweet = await listOneTweetService(req.params.id);

    return res.status(200).json(tweet);
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

export default listOneTweetController;
