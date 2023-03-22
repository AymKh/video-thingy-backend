/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthDTO } from './DTO/Auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signin')
    signinLocal(@Body() payload: AuthDTO) {
        return this.authService.signinLocal(payload);
    }

    @Post('signup')
    signupLocal(@Body() payload: AuthDTO) {
        return this.authService.signupLocal(payload);
    }
}
