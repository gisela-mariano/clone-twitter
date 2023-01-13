import { Router } from 'express';
import verifySchemaMiddleware from '../middlewares/verifySchema.mdlw';
import createUserSchema from '../schemas/users/create.schema';
import createUserController from '../controllers/users/createUser.ctrl';
import loginUserSchema from '../schemas/users/login.schema';
import loginUserController from '../controllers/users/loginUser.ctrl';
import listUserProfileController from '../controllers/users/listUserProfile.ctrl';
import verifyUserExistsMiddleware from '../middlewares/user/verifyUserExists.mdlw';

const userRoutes = Router();
export const authRoutes = Router();

userRoutes.post(
  '',
  verifySchemaMiddleware(createUserSchema),
  createUserController,
);
userRoutes.get('/:id', verifyUserExistsMiddleware, listUserProfileController);
authRoutes.post(
  '',
  verifySchemaMiddleware(loginUserSchema),
  loginUserController,
);

export default userRoutes;
