import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonRepository } from './person.repository';

@Injectable()
export class PersonService {
  constructor(private personRepository: PersonRepository) {}

  async create(createPersonDto: CreatePersonDto) {
    return this.personRepository.createPerson(createPersonDto);
  }

  findAll() {
    return this.personRepository.allPerson();
  }

  findOne(id: string) {
    return this.personRepository.findOne(id);
  }

  update(id: string, updatePersonDto: UpdatePersonDto) {
    return this.personRepository.update(id, updatePersonDto);
  }

  remove(id: string) {
    return this.personRepository.remove(id);
  }
}
