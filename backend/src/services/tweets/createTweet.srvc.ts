import User from '../../entities/user.entity';
import { IReqCreateTweet } from '../../interfaces/tweet.intf';
import { tweetRepository, userRepository } from '../../repositories';

const createTweetService = async ({ content, userId }: IReqCreateTweet) => {
  const user = await userRepository.findOneBy({ id: userId });

  const createdTweet = tweetRepository.create({
    content,
    user: user as User,
  });
  await tweetRepository.save(createdTweet);

  const tweet = tweetRepository.findOne({
    where: { id: createdTweet.id },
    relations: { user: true },
    select: {
      id: true,
      content: true,
      created_at: true,
      user: { id: true, name: true },
    },
  });

  return tweet;
};

export default createTweetService;
