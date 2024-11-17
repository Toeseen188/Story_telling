import { User } from './user.entity';
import { Comment } from './comment.entity';
import { Reaction } from './reaction.entity';
export declare class Story {
    id: number;
    title: string;
    content: string;
    category: string;
    author: User;
    comments: Comment[];
    reactions: Reaction[];
    datePublished: Date;
}
