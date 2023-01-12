import AppError from '../../errors/AppError';
import { IReqCreateUser, IResCreateUser } from '../../interfaces/user.intf';
import { userRepository } from '../../repositories';

const createUserService = async (
  data: IReqCreateUser,
): Promise<IResCreateUser> => {
  const userIsRegistred = await userRepository.findOneBy({ email: data.email });

  if (userIsRegistred) throw new AppError('User already registred', 400);

  const createdUser = userRepository.create(data);
  await userRepository.save(createdUser);

  const returnUser: IResCreateUser = { ...createdUser };
  delete returnUser.password;

  return returnUser;
};

export default createUserService;
