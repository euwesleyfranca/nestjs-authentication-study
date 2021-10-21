import { Person } from '../entities/person.entity';
import { IsEmail, IsString } from 'class-validator';

export class CreatePersonDto extends Person {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  mail: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  compare_password: string;

  @IsString()
  country: string;

  @IsString()
  state: string;

  @IsString()
  city: string;

  @IsString()
  day: string;

  @IsString()
  month: string;

  @IsString()
  year: string;

  created_at?: string | Date;

  updated_at?: string | Date;
}
