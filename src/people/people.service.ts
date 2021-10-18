import { Injectable } from '@nestjs/common';
import { PeopleDTO } from './dto/people.DTO';
import { PeopleRepository } from './peopleRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user-repository';
import { People } from './entity/people-entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(PeopleRepository)
    private peopleRepository: PeopleRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async index(): Promise<People[]> {
    return this.peopleRepository.find();
  }

  async create(peopleDTO: PeopleDTO): Promise<People> {
    const people = await this.peopleRepository.createPeople(peopleDTO);

    await this.userRepository.createUser(peopleDTO, people);

    return people;
  }
}
