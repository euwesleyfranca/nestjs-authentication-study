import { Person } from '../entities/person.entity';
import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePersonDto extends Person {
  @IsString()
  @IsAlpha()
  @IsNotEmpty({ message: 'O campo nome não pode estar vazio!' })
  first_name: string;

  @IsString()
  @IsAlpha()
  @IsNotEmpty({ message: 'O campo sobrenome não pode estar vazio!' })
  last_name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'O campo email não pode estar vazio!' })
  readonly mail: string;

  @IsString()
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo senha não pode estar vazio!' })
  @MinLength(8, { message: 'Senha deve ter no mínimo 8 caracteres' })
  @MaxLength(20, { message: 'Senha deve ter no máximo 15 caracteres' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Esta senha pode ser vulnerável, digite uma senha segura! Dica: Combine letras e numeros, utilize ao menos uma letra maiúscula',
  })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo confimação de senha não pode estar vazio!' })
  compare_password: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo País não pode estar vazio!' })
  country: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo Estado não pode estar vazio!' })
  state: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo Cidade não pode estar vazio!' })
  city: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo dia não pode estar vazio!' })
  day: string;

  @IsString({ message: 'O campo mês não pode estar vazio!' })
  @IsNotEmpty()
  month: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo ano não pode estar vazio!' })
  year: string;

  created_at?: string | Date;

  updated_at?: string | Date;
}
