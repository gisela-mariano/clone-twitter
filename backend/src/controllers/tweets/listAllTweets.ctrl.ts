import { Request, Response } from 'express';
import AppError from '../../errors/AppError';
import listAllTweetsService from '../../services/tweets/listAllTweets.srvc';

const listAllTweetsController = async (_: Request, res: Response) => {
  try {
    const tweets = await listAllTweetsService();

    return res.status(200).json(tweets);
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

export default listAllTweetsController;
