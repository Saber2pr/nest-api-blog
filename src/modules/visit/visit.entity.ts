import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'visit' })
export class VisitEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, default: '', comment: '页面' })
  pagePath: string;

  @Column('int', { default: 1, comment: '次数' })
  pv: number;
}
