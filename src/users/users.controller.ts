import {Controller, Delete, Get, Put, Query} from '@nestjs/common';
import {UsersItemDto} from '@app/users/users-item.dto';
import {UsersService} from '@app/users/users.service';
import {Users} from '@app/users/entities/users.entity';

// @ts-ignore
@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get()
  public async logUp(login: string, password: string): Promise<Users> {
    return await this.usersService.createUser(login, password);
  }

  @Get()
  public async getAll(): Promise<Users[]> {
    return await this.usersService.getAllUsers();
  }

  @Get()
  public async getOne(userLogin: string): Promise<Users> {
    return await this.usersService.getUserByLogin(userLogin);
  }

  @Put()
  public async update(newLogin: string, oldLogin: string): Promise<Users> {
    return await this.usersService.updateUser(newLogin, oldLogin);
  }

  @Delete()
  public async deleteUser(userLogin: string): Promise<void> {
    await this.usersService.destroyUser(userLogin);
  }

}
