import { Router } from 'express';
import verifySchemaMiddleware from '../middlewares/verifySchema.mdlw';
import createUserSchema from '../schemas/User/create.schema';
import createUserController from '../controllers/users/createUser.ctrl';

const userRoutes = Router();

userRoutes.post(
  '',
  verifySchemaMiddleware(createUserSchema),
  createUserController,
);

export default userRoutes;
