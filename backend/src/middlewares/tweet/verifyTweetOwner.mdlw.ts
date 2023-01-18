import { NextFunction, Response } from 'express';
import { tweetRepository } from '../../repositories';
import { IInfosToken, IModifiedRequest } from '../../interfaces';

const verifyTweetOwnerMiddleware = async (
  req: IModifiedRequest,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.decodedToken as IInfosToken;

  const userTweet = await tweetRepository
    .createQueryBuilder('tweet')
    .leftJoin('tweet.user', 'user')
    .where('tweet.id = :id', { id: req.params.id })
    .andWhere('user.id = :userId', { userId: id })
    .getOne();

  if (!userTweet)
    return res
      .status(401)
      .json({ message: 'You do not have permission to delete this tweet' });

  next();
};

export default verifyTweetOwnerMiddleware;
