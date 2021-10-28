import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { PersonRepository } from './person.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PersonController],
  providers: [PersonService, PrismaService, PersonRepository],
})
export class PersonModule {}
