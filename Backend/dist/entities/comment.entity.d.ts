import { Story } from './story.entity';
import { User } from './user.entity';
export declare class Comment {
    id: number;
    CommentText: string;
    story: Story;
    user: User;
    datePosted: Date;
}
