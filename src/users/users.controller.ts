import {Controller, Delete, Get, Put} from '@nestjs/common';
import {UsersService} from '@app/users/users.service';
import {Users} from '@app/users/entities/users.entity';

@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get('newUser')
  public async logUp(login: string, password: string): Promise<Users> {
    return await this.usersService.createUser(login, password);
  }

  @Get('getAll')
  public async getAll(): Promise<Users[]> {
    return await this.usersService.getAllUsers();
  }

  @Get('getOne')
  public async getOne(userLogin: string): Promise<Users> {
    return await this.usersService.getUserByLogin(userLogin);
  }

  @Put('update')
  public async update(newLogin: string, oldLogin: string): Promise<Users> {
    return await this.usersService.updateUser(newLogin, oldLogin);
  }

  @Delete('destroyUser')
  public async deleteUser(userLogin: string): Promise<void> {
    await this.usersService.destroyUser(userLogin);
  }

}
