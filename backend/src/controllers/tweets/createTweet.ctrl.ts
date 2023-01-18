import { Response } from 'express';
import AppError from '../../errors/AppError';
import createTweetService from '../../services/tweets/createTweet.srvc';
import { IModifiedRequest } from '../../interfaces';

const createTweetController = async (req: IModifiedRequest, res: Response) => {
  try {
    const tweet = await createTweetService({
      ...req.body,
      userId: req.decodedToken?.id,
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
