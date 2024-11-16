import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ServicesL {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  image: string;
}