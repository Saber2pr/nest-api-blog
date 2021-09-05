import { HelloEntity } from './hello.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelloService } from './hello.service';
import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HelloEntity])],
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
