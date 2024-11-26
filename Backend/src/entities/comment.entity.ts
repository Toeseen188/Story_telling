import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne, 
    CreateDateColumn 
  } from 'typeorm';
  import { Story } from './story.entity';
  import { User } from './user.entity';

  @Entity()
  export class Comment{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    CommentText: string

    @ManyToOne(() => Story, (story) => story.comments)
    story: Story;

    @ManyToOne(() => User, (user) => user.comments)
    user: User;

    @CreateDateColumn()
    datePosted: Date;
  }
