import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<boolean> {
    // const user = await this.usersService.getUserByLogin(username);
    // if (user.computeSHA256(user.password) === user.password) {
    //   return true;
    // }
    // return false;
    return true;
  }
}
