import { tweetRepository } from '../../repositories';

const listAllTweetsService = async () => {
  const tweets = await tweetRepository
    .createQueryBuilder('tweet')
    .loadRelationCountAndMap('tweet.likes', 'tweet.likes')
    .loadRelationCountAndMap('tweet.comments', 'tweet.comments')
    .orderBy('tweet.created_at', 'ASC')
    .getMany();

  return tweets;
};

export default listAllTweetsService;
