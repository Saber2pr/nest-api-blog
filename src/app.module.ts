import { WinstonModule } from 'nest-winston';

import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { mysqlOptions, winstonOptions } from './config';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlOptions),
    WinstonModule.forRoot(winstonOptions),
    HelloModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
