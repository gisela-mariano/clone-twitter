import { Router } from 'express';
import createTweetController from '../controllers/tweets/createTweet.ctrl';
import verifyAuthTokenMiddleware from '../middlewares/user/verifyAuthToken.mdlw';
import verifyUserExistsMiddleware from '../middlewares/user/verifyUserExists.mdlw';
import listOneTweetController from '../controllers/tweets/listOneTweet.ctrl';
import verifyTweetExistsMiddleware from '../middlewares/tweet/verifyTweetExists.mdlw';
import listAllTweetsController from '../controllers/tweets/listAllTweets.ctrl';
import deleteTweetController from '../controllers/tweets/deleteTweet.ctrl';
import verifyTweetOwnerMiddleware from '../middlewares/tweet/verifyTweetOwner.mdlw';

const tweetRoutes = Router();

tweetRoutes.post(
  '',
  verifyAuthTokenMiddleware,
  verifyUserExistsMiddleware,
  createTweetController,
);
tweetRoutes.get('', listAllTweetsController);
tweetRoutes.get('/:id', verifyTweetExistsMiddleware, listOneTweetController);
tweetRoutes.delete(
  '/:id',
  verifyAuthTokenMiddleware,
  verifyTweetExistsMiddleware,
  verifyTweetOwnerMiddleware,
  deleteTweetController,
);

export default tweetRoutes;
