import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne, 
    OneToMany, 
    CreateDateColumn 
  } from 'typeorm';
  import { User } from './user.entity';
  import { Comment } from './comment.entity';
  import { Reaction } from './reaction.entity';
  
  @Entity()
  export class Story {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column('text')
    content: string;
    
    @Column()
    category: string;
  
    @ManyToOne(() => User, (user) => user.stories)
    author: User;
  
    @OneToMany(() => Comment, (comment) => comment.story)
    comments: Comment[];
  
    @OneToMany(() => Reaction, (reaction) => reaction.story)
    reactions: Reaction[];
  
    @CreateDateColumn()
    datePublished: Date;
  }