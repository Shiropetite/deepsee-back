import { Injectable } from '@nestjs/common';
import { Test } from './test.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) {}

  findAll(): Promise<Test[]> {
    return this.testRepository.find();
  }

  createOne() {
    const test = new Test();
    test.name = 'test';
    return this.testRepository.save(test);
  }
}
