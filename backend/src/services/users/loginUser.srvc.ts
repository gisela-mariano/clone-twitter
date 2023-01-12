import { compareSync } from 'bcryptjs';
import AppError from '../../errors/AppError';
import { IReqLoginUser } from '../../interfaces/user.intf';
import { userRepository } from '../../repositories';
import jwt from 'jsonwebtoken';

const loginUserService = async ({
  email,
  password,
}: IReqLoginUser): Promise<string> => {
  const user = await userRepository.findOneBy({ email });

  if (!user) throw new AppError('Invalid email or password', 401);

  const passwordMatch = compareSync(password, user.password);

  if (!passwordMatch) throw new AppError('Invalid email or password', 401);

  const token = jwt.sign(
    { id: user.id, name: user.name },
    String(process.env.SECRET_KEY),
    { expiresIn: '24h' },
  );

  return token;
};

export default loginUserService;
