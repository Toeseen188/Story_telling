import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Story } from './entities/story.entity';
import { Comment } from './entities/comment.entity';
import { Reaction } from './entities/reaction.entity';
export const AppDataSource = new DataSource({
  type: 'postgres', // or 'mysql'
  host: 'localhost',
  port: 5432, // or 3306 for MySQL
  username: 'my_story_user',
  password: 'story',
  database: 'my_story_db',
<<<<<<< HEAD
  entities: [], // we'll add our entities later
=======
  entities: [Story, User, Comment, Reaction], // we'll add our entities later
>>>>>>> parent of e4b3e78... resolving conflict
  synchronize: true, // for development only
});