import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PeopleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPersonDto: CreatePersonDto) {
    return await this.prisma.people.create({
      data: {
        first_name: createPersonDto.first_name,
        last_name: createPersonDto.last_name,
        country: createPersonDto.country,
        state: createPersonDto.state,
        city: createPersonDto.city,
        status: true,
        createdAt: createPersonDto.createdAt,
        updatedAt: createPersonDto.updatedAt,
      },
    });
  }

  findAll() {
    return this.prisma.people.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
