import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column()
  name!: string

  @Column()
  login!: string

  @Column()
  password!: string
}

export type UserProfile = Omit<User, "password"> | undefined;

export default User;
