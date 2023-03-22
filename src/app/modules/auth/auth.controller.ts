/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthDTO } from './DTO/Auth.dto';
import { CreateUsertDTO } from '../users/DTO/CreateUser.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UsersService
    ) { }

    @Post('signin')
    signinLocal(@Body() payload: AuthDTO) {
        return this.authService.signinLocal(payload);
    }

    @Post('signup')
    signupLocal(@Body() payload: CreateUsertDTO) {
        return this.userService.createOneUser(payload);
    }
}
