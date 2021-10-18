import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import moment from 'moment';
import { PeopleStatusAccount } from '../people-status';

export class PeopleDTO {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  first_name: string;

  @IsNotEmpty({ message: 'O campo sobrenome não pode ser vazio' })
  last_name: string;

  @IsNotEmpty({ message: 'O campo país não pode ser vazio' })
  country: string;

  @IsNotEmpty({ message: 'O campo estado não pode ser vazio' })
  state: string;

  @IsNotEmpty({ message: 'O campo dia não pode ser vazio' })
  day: string;

  @IsNotEmpty({ message: 'O campo mẽs não pode ser vazio' })
  month: string;

  @IsNotEmpty({ message: 'O campo ano não pode ser vazio' })
  year: string;

  @IsNotEmpty({ message: 'O Campo email não pode ser vazio' })
  @IsEmail()
  mail: string;

  username: string;

  @IsNotEmpty({ message: 'Password field cannot be empty' })
  @IsString()
  @MinLength(8)
  @MaxLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Weak password, try a new password',
  })
  password: string;

  @IsNotEmpty({ message: 'Password confirmation field cannot be empty' })
  password_confirmation: string;

  @IsNotEmpty()
  status: PeopleStatusAccount.ACTIVE;

  created_at: moment.Moment;

  updated_at: moment.Moment;
}
