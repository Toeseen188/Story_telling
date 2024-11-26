import { Story } from './story.entity';
import { User } from './user.entity';
export declare class Reaction {
    id: number;
    reactionType: string;
    story: Story;
    user: User;
}
