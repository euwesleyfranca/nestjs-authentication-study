import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { PeopleDTO } from './dto/people.DTO';
import { People } from './entity/people-entity';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}
  @Get()
  async index(): Promise<People[]> {
    return await this.peopleService.index();
  }

  @Post()
  async create(@Body() peopleDTO: PeopleDTO): Promise<People> {
    const people = await this.peopleService.create(peopleDTO);

    try {
      return people;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
