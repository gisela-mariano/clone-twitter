import { Router } from 'express';
import verifySchemaMiddleware from '../middlewares/verifySchema.mdlw';
import createUserSchema from '../schemas/users/create.schema';
import createUserController from '../controllers/users/createUser.ctrl';
import loginUserSchema from '../schemas/users/login.schema';
import loginUserController from '../controllers/users/loginUser.ctrl';

const userRoutes = Router();
export const authRoutes = Router();

userRoutes.post(
  '',
  verifySchemaMiddleware(createUserSchema),
  createUserController,
);
authRoutes.post(
  '',
  verifySchemaMiddleware(loginUserSchema),
  loginUserController,
);

export default userRoutes;
