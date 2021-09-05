import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hello')
export class HelloEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, default: '' })
  word: string;
}
