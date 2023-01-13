import { IResUserProfile } from '../../interfaces/user.intf';
import { userRepository } from '../../repositories';

const listUserProfileService = async (id: string): Promise<IResUserProfile> => {
  const listUsers = await userRepository
    .createQueryBuilder('user')
    .select(['user.id', 'user.name', 'tweet'])
    .leftJoin('user.tweets', 'tweet', 'tweet.userId = user.id')
    .where('user.id = :id', { id })
    .orderBy('tweet.created_at', 'DESC')
    .getOne();

  return listUsers as IResUserProfile;
};

export default listUserProfileService;
