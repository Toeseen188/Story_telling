import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres', // or 'mysql'
  host: 'localhost',
  port: 5432, // or 3306 for MySQL
  username: 'your_db_username',
  password: 'your_db_password',
  database: 'your_db_name',
  entities: [], // we'll add our entities later
  synchronize: true, // for development only
});