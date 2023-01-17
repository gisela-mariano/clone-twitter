import { tweetRepository } from '../../repositories';

const listOneTweetService = async (id: string) => {
  const tweet = await tweetRepository
    .createQueryBuilder('tweet')
    .select(['user.id', 'user.name', 'tweet', 'comments'])
    .leftJoin('tweet.user', 'user')
    .leftJoin('tweet.comments', 'comments')
    .loadRelationCountAndMap('tweet.likes', 'tweet.likes')
    .where('tweet.id = :id', { id })
    .orderBy('comments.created_at', 'ASC')
    .getOne();

  return tweet;
};

export default listOneTweetService;
