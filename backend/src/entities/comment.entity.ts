import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './user.entity';

@Entity('comments')
class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 281 })
  content: string;

  @CreateDateColumn()
  created_at: string;

  @ManyToOne(() => User, (user) => user.tweets)
  user: User;
}

export default Comment;
