import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PersonRepository } from './person.repository';

@Module({
  controllers: [PeopleController],
  providers: [PeopleService, PrismaService, PersonRepository],
})
export class PeopleModule {}
