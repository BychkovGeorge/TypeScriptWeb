import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {UsersService} from '@app/users/users.service';

@Entity({
  name: 'users',
})
export class Users {

  private readonly usersService: UsersService;

  constructor(login: string, password: string) {
      this.login = login;
      this.password = password;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

@Column()
  login: string;

@Column()
  password: string;

  @CreateDateColumn({
    type: 'timestamp with time zone',
  })
  createdAt: Date;
}
