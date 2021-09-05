import { envConf } from './envconf';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const mysqlOptions = envConf<TypeOrmModuleOptions>({
  development: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest_api_blog',
    autoLoadEntities: true,
    synchronize: true,
  },
  production: {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_POST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: true,
    synchronize: false,
  },
});
