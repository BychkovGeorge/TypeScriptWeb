import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Users} from '@app/users/entities/users.entity';
import {createHash} from 'crypto';

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

  public computeSHA256(lines: string): string {
    const hash = createHash('sha256');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim(); // remove leading/trailing whitespace
      if (line === '') { continue; } // skip empty lines
      hash.write(line); // write a single line to the buffer
    }
    return hash.digest('base64'); // returns hash as string
  }
}
