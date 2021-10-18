import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user-repository';
import { People } from './entity/people-entity';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { PeopleRepository } from './peopleRepository';

@Module({
  imports: [TypeOrmModule.forFeature([PeopleRepository, UserRepository])],
  controllers: [PeopleController],
  providers: [PeopleService, People],
})
export class PeopleModule {}
