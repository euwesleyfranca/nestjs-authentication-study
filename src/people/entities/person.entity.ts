import { Prisma } from '.prisma/client';

export class Person implements Prisma.PeopleUncheckedCreateInput {
  id?: string;
  first_name: string;
  last_name: string;
  mail: string;
  password: string;
  compare_password: string;
  country: string;
  state: string;
  city: string;
  status: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
  user: Prisma.UserUncheckedCreateNestedOneWithoutPeopleInput;
}
