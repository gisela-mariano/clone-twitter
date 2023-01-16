import { userRepository } from '../../repositories';

const listUserProfileService = async (id: string) => {
  const listUsers = await userRepository
    .createQueryBuilder('user')
    .select(['user.id', 'user.name', 'tweet'])
    .leftJoin('user.tweets', 'tweet')
    .loadRelationCountAndMap('tweet.likes', 'tweet.likes')
    .where('user.id = :id', { id })
    .orderBy('tweet.created_at', 'ASC')
    .getOne();

  return listUsers;
};

export default listUserProfileService;
