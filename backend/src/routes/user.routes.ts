import { Router } from 'express';
import verifySchemaMiddleware from '../middlewares/verifySchema.mdlw';
import createUserController from '../controllers/users/createUser.ctrl';
import loginUserController from '../controllers/users/loginUser.ctrl';
import listUserProfileController from '../controllers/users/listUserProfile.ctrl';
import verifyUserExistsMiddleware from '../middlewares/user/verifyUserExists.mdlw';
import createUserSerializer from '../serializers/users/create.schema';
import loginUserSerializer from '../serializers/users/login.schema';

const userRoutes = Router();
export const authRoutes = Router();

userRoutes.post(
  '',
  verifySchemaMiddleware(createUserSerializer),
  createUserController,
);
userRoutes.get('/:id', verifyUserExistsMiddleware, listUserProfileController);
authRoutes.post(
  '',
  verifySchemaMiddleware(loginUserSerializer),
  loginUserController,
);

export default userRoutes;
