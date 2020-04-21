import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Users} from '@app/users/entities/users.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private readonly UsersRepository: Repository<Users>,
  ) {}

  public createUser(login: string, password: string): Users {
    return new Users(login, password);
  }

  public getItem(id?: string): Promise<Users> {
    return this.UsersRepository.findOne({
      order: {
        createdAt: 'ASC',
      },
      ...(id && {
        where: {
          id,
        },
      }),
    });
  }

  async findOne(username: string): Promise<Users | undefined> {
    return Users.users.find(user => user.username === username);
  }
}