import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PersonRepository } from './person.repository';

@Module({
  controllers: [PersonController],
  providers: [PersonService, PrismaService, PersonRepository],
})
export class PersonModule {}
