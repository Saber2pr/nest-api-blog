import { buildSort } from './../../utils/build-sort';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ListVisitDto } from './dto/ListVisitDto';
import { CreateVisitDto } from './dto/SaveVisitDto';
import { VisitEntity } from './visit.entity';

@Injectable()
export class VisitService {
  constructor(
    @InjectRepository(VisitEntity)
    private readonly visitEntity: Repository<VisitEntity>,
  ) {}

  async pv(visit: CreateVisitDto) {
    let visited = await this.visitEntity.findOne({ pagePath: visit.pagePath });
    if (visited) {
      visited.pv++;
    } else {
      visited = this.visitEntity.create(visit);
      visited.pv = 1;
    }
    return this.visitEntity.save(visited);
  }

  async list(query: ListVisitDto) {
    const { sort } = query;
    if (sort) {
      const order = buildSort(sort);
      return this.visitEntity.find({ order });
    }
    return this.visitEntity.find();
  }
}
