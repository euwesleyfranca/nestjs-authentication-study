import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonDto } from './dto/create-person.dto';
import * as bcrypt from 'bcrypt';

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
        country: createPersonDto.country,
        state: createPersonDto.state,
        city: createPersonDto.city,
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
}
