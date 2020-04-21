import {Controller, Get, Query} from '@nestjs/common';
import {UsersItemDto} from '@app/users/users-item.dto';
import {UsersService} from '@app/users/users.service';
import {Users} from '@app/users/entities/users.entity';

// @ts-ignore
@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get('item')
  public getItem(
    @Query() dto: UsersItemDto,
  ) {
    return this.usersService.getItem(dto.id);
  }

  @Get()
  public logUp(login: string, password: string): Users {
    return this.usersService.createUser(login, password);
  }
}
