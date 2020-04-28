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

  public async createUser(login: string, password: string): Promise<Users> {
    const user: Users = new Users(login, password);
    await this.UsersRepository.save(user);
    return user;
  }

  // @ts-ignore
  public async getAllUsers(): Promise<Users[]> {
    return await this.UsersRepository.find();
  }

  public async getUserByLogin(userLogin: string): Promise<Users> {
    return await this.UsersRepository.findOne({login: userLogin});
  }

  public async updateUser(newLogin: string, oldLogin: string): Promise<Users> {
    const user: Users = await this.getUserByLogin(oldLogin);
    user.login = newLogin;
    return user;
  }

  public async destroyUser(userLogin: string): Promise<void> {
    const user: Users =  await this.getUserByLogin(userLogin);
    await this.UsersRepository.remove(user);
  }
}
