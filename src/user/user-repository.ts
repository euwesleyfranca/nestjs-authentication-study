import { PeopleDTO } from 'src/people/dto/people.DTO';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './entity/user.entity';
import * as bcript from 'bcrypt';
import { v4 as uuid } from 'uuid';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(peopleDTO: PeopleDTO, people): Promise<void> {
    const { mail, password } = peopleDTO;

    const salt = await bcript.genSalt();
    const hashedPassword = await bcript.hash(password, salt);

    const user = this.create({
      mail,
      username: uuid(),
      password: hashedPassword,
      password_confirmation: hashedPassword,
      people: people.id,
    });

    await this.save(user);
  }
}
