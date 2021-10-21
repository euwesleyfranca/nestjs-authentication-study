import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonRepository } from './person.repository';

@Injectable()
export class PeopleService {
  constructor(private personRepository: PersonRepository) {}

  async create(createPersonDto: CreatePersonDto) {
    return this.personRepository.createPerson(createPersonDto);
  }

  findAll() {
    return this.personRepository.allPerson();
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
