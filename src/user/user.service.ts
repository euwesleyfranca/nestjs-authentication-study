import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PeopleDTO } from 'src/people/dto/people.DTO';
import { UserDto } from './dto/user.DTO';
import { UserRepository } from './user-repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}
}
