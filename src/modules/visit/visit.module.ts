import { VisitEntity } from './visit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { VisitController } from './visit.controller';
import { VisitService } from './visit.service';

@Module({
  imports: [TypeOrmModule.forFeature([VisitEntity])],
  controllers: [VisitController],
  providers: [VisitService],
})
export class VisitModule {}
