import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Story } from './story.entity';
import { User } from './user.entity';

@Entity()
export class Reaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reactionType: string // e.g., 'like', 'dislike', 'heart'

    @ManyToOne(() => Story, (story) => story.reactions)
    story: Story;

    @ManyToOne(() => User, (user) => user.reactions)
    user: User
}