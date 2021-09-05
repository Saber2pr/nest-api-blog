import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HelloEntity } from './hello.entity';

@Injectable()
export class HelloService {
  constructor(
    @InjectRepository(HelloEntity)
    private readonly helloEntity: Repository<HelloEntity>,
  ) {}
  async create(word: string) {
    const newWord = this.helloEntity.create({ word });
    return this.helloEntity.save(newWord);
  }
  async update(id: number, newWord: string) {
    const oldWord = await this.helloEntity.findOne({ id });
    oldWord.word = newWord;
    await this.helloEntity.save(oldWord);
  }
  async list(id?: number) {
    if (id) {
      return this.helloEntity.find({ id });
    } else {
      return this.helloEntity.find();
    }
  }
  async delete(id: number) {
    return this.helloEntity.delete({ id });
  }
}
