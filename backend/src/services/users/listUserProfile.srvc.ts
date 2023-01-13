import { userRepository } from '../../repositories';

const listUserProfileService = async (id: string) => {
  const listUsers = await userRepository
    .createQueryBuilder('user')
    .select(['user.id', 'user.name'])
    // .innerJoin('user.tweets', 'tweet')
    .where('user.id = :id', { id })
    .getOne();

  // const listUsers = await userRepository.find({
  //   where: { id },
  //   relations: { tweets: true },
  //   select: {
  //     id: true,
  //     name: true,
  //     tweets: { id: true, content: true, created_at: true, likes: true },
  //   },
  // });

  return listUsers;
};

export default listUserProfileService;
