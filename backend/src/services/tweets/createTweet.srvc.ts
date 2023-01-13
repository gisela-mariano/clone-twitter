import User from '../../entities/user.entity';
import { IReqCreateTweet } from '../../interfaces/tweet.intf';
import { tweetRepository, userRepository } from '../../repositories';

const createTweetService = async ({
  content,
  likes,
  userId,
}: IReqCreateTweet) => {
  const user = await userRepository.findOneBy({ id: userId });

  const createdTweet = tweetRepository.create({
    content,
    likes,
    user: user as User,
  });
  await tweetRepository.save(createdTweet);

  return createdTweet;
};

export default createTweetService;
