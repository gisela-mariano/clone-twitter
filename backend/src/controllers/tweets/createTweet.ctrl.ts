import { Request, Response } from 'express';
import AppError from '../../errors/AppError';
import createTweetService from '../../services/tweets/createTweet.srvc';

const createTweetController = async (req: Request, res: Response) => {
  try {
    const tweet = await createTweetService({
      ...req.body,
      userId: req.params.id,
    });

    return res.status(201).json(tweet);
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

export default createTweetController;
