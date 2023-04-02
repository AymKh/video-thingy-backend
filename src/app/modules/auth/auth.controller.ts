/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../../guards/local.guard';
import { UsersService } from 'src/app/services/users/users.service';
import { CreateUsertDTO } from '../users/DTO/CreateUser.dto';

@Controller('auth')
export class AuthController {
    constructor(private userService: UsersService) { }

    @UseGuards(LocalAuthGuard)
    @Post('signin')
    signinLocal(@Request() req) {
        return req.user;
    }

    @Get('logout')
    signoffLocal(@Request() req) {
        req.session.destroy();
        return { msg: 'user logged out' }
    }

    @Post('signup')
    signupLocal(@Body() payload: CreateUsertDTO) {
        return this.userService.createOneUser(payload);
    }
}
