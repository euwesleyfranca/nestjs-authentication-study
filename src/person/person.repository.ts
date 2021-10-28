import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonDto } from './dto/create-person.dto';
import * as bcrypt from 'bcrypt';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonRepository {
  constructor(private prisma: PrismaService) {}

  async createPerson(createPersonDto: CreatePersonDto) {
    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash(createPersonDto.password, salt);

    return this.prisma.people.create({
      data: {
        first_name: createPersonDto.first_name,
        last_name: createPersonDto.last_name,
        country_id: createPersonDto.country_id,
        state_id: createPersonDto.state_id,
        city_id: createPersonDto.city_id,
        day: createPersonDto.day,
        month: createPersonDto.month,
        year: createPersonDto.year,
        status: true,
        createdAt: createPersonDto.createdAt,
        updatedAt: createPersonDto.updatedAt,
        user: {
          create: {
            mail: createPersonDto.mail,
            username: createPersonDto.username,
            password: passwordHashed,
            compare_password: passwordHashed,
          },
        },
      },
    });
  }

  async allPerson() {
    return this.prisma.people.findMany();
  }

  async findOne(id: string) {
    return this.prisma.people.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id, updatePersonDto: UpdatePersonDto) {
    return this.prisma.people.update({
      where: {
        id: id,
      },
      data: {
        first_name: updatePersonDto.first_name,
        last_name: updatePersonDto.last_name,
        country_id: updatePersonDto.country_id,
        state_id: updatePersonDto.state_id,
        city_id: updatePersonDto.city_id,
        status: updatePersonDto.status,
        day: updatePersonDto.day,
        month: updatePersonDto.month,
        year: updatePersonDto.year,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.people.delete({
      where: {
        id: id,
      },
    });
  }
}
