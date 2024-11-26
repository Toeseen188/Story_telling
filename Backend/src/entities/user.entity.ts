import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Story } from './story.entity';
import { Comment } from './comment.entity';
import { Reaction } from './reaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Story, (story) => story.author)
  stories: Story[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Reaction, (reaction) => reaction.user)
  reactions: Reaction[];
}