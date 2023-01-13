import AppDataSource from '../data-source';
import Tweet from '../entities/tweet.entity';
import User from '../entities/user.entity';

export const userRepository = AppDataSource.getRepository(User);
export const tweetRepository = AppDataSource.getRepository(Tweet);
