import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './user.entity';
import Tweet from './tweet.entity';

@Entity('tweetLikes')
class TweetLikes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.likes)
  user: User;

  @ManyToOne(() => Tweet, (tweet) => tweet.likes)
  tweet: Tweet;
}

export default TweetLikes;
