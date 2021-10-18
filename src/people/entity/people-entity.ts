import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PeopleStatusAccount } from '../people-status';

@Entity()
export class People {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  day: string;

  @Column()
  month: string;

  @Column()
  year: string;

  @Column({
    type: 'enum',
    enum: ['active', 'inactive'],
    default: 'active',
  })
  status: PeopleStatusAccount;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  created_at: string;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: string;
  peoples: import('/var/www/wesleyfranca/mstock/musicstock-api/src/user/entity/user.entity').User[];
  user: import('/var/www/wesleyfranca/mstock/musicstock-api/src/user/entity/user.entity').User[];
}
