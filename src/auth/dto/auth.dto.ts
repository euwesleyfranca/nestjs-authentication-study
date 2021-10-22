import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsNotEmpty({
    message:
      'O campo email não podeestar vazio, por favor preencha e tente novamente!',
  })
  @IsString()
  email: string;

  @IsNotEmpty({
    message:
      'O campo senha não pode estar vazio, por favor, preencha e tente novamente!',
  })
  @IsString()
  password: string;
}
