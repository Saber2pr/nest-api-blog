import { envConf } from './envconf';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const mysqlOptions = envConf<TypeOrmModuleOptions>({
  development: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest_api_hello',
    autoLoadEntities: true,
    synchronize: true,
  },
  production: {
    type: 'mysql',
    host: process.env.host,
    port: +process.env.port,
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    autoLoadEntities: true,
    synchronize: false,
  },
});
