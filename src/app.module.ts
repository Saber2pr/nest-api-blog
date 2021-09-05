import { WinstonModule } from 'nest-winston';

import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { mysqlOptions, winstonOptions } from './config';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { VisitModule } from './modules/visit/visit.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlOptions),
    WinstonModule.forRoot(winstonOptions),
    VisitModule,
  ],
  controllers: [AppController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
