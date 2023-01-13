import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './user.entity';
import Comment from './comment.entity';

@Entity('tweets')
class Tweet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 281 })
  content: string;

  @Column('int')
  likes: number;

  @CreateDateColumn()
  created_at: string;

  @ManyToOne(() => User, (user) => user.tweets)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.tweet)
  comments: Comment[];
}

export default Tweet;
