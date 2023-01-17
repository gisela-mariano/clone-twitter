import { NextFunction, Request, Response } from 'express';
import { tweetRepository } from '../../repositories';

const verifyTweetExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  const tweet = await tweetRepository.findOneBy({ id });

  if (!tweet) return res.status(404).json({ message: 'Tweet not found' });

  next();
};

export default verifyTweetExistsMiddleware;
