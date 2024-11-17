import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres', // or 'mysql'
  host: 'localhost',
  port: 5432, // or 3306 for MySQL
  username: 'my_story_user',
  password: 'story',
  database: 'my_story_db',
  entities: [], // we'll add our entities later
  synchronize: true, // for development only
});