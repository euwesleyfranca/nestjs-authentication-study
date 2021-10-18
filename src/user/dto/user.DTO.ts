import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import moment from 'moment';

export class UserDto {
  @IsNotEmpty()
  id: string;

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
  people: string;

  created_at: moment.Moment;

  updated_at: moment.Moment;
}
