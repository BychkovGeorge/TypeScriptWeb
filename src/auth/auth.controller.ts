import {Controller, Get} from '@nestjs/common';
import {AuthService} from '@app/auth/auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {
  }

  @Get()
  public authentication(log: string, pass: string): Promise<boolean> {
    return this.authService.validateUser(log, pass);
  }

}
