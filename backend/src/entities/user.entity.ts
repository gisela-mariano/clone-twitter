import { hashSync } from 'bcryptjs';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Tweet from './tweet.entity';
import Comment from './comment.entity';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 50, unique: true })
  name: string;

  @Column('varchar', { length: 255, unique: true })
  email: string;

  @Column('varchar', { length: 255 })
  password: string;

  @CreateDateColumn()
  created_at: string;

  @OneToMany(() => Tweet, (tweet) => tweet.user)
  tweets: Tweet[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    if (this.password) this.password = hashSync(this.password, 10);
  }
}

export default User;
