import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Music {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
