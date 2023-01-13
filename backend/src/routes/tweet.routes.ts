import { Router } from 'express';
import createTweetController from '../controllers/tweets/createTweet.ctrl';
import verifyAuthTokenMiddleware from '../middlewares/user/verifyAuthToken.mdlw';
import verifyUserExistsMiddleware from '../middlewares/user/verifyUserExists.mdlw';

const tweetRoutes = Router();

tweetRoutes.post(
  '',
  verifyAuthTokenMiddleware,
  verifyUserExistsMiddleware,
  createTweetController,
);

export default tweetRoutes;
