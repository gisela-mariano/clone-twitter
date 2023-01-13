import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './user.entity';
import Tweet from './tweet.entity';

@Entity('comments')
class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 281 })
  content: string;

  @CreateDateColumn()
  created_at: string;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Tweet, (tweet) => tweet.comments)
  tweet: Tweet;
}

export default Comment;
