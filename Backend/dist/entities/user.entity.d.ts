import { Story } from './story.entity';
import { Comment } from './comment.entity';
import { Reaction } from './reaction.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    stories: Story[];
    comments: Comment[];
    reactions: Reaction[];
}
