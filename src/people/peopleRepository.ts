import { EntityRepository, Repository } from 'typeorm';
import { PeopleDTO } from './dto/people.DTO';
import { People } from './entity/people-entity';

@EntityRepository(People)
export class PeopleRepository extends Repository<People> {
  async index(): Promise<People[]> {
    const query = this.createQueryBuilder('people');

    const people = query.getMany();

    return people;
  }

  async createPeople(peopleDTO: PeopleDTO): Promise<People> {
    const { first_name, last_name, country, state, day, month, year, status } =
      peopleDTO;

    const peopleData = this.create({
      first_name,
      last_name,
      country,
      state,
      day,
      month,
      year,
      status,
    });
    const people = await this.save(peopleData);
    return people;
  }
}
