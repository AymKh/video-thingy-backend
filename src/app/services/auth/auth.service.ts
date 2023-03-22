/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/app/models/User';
import { AuthDTO } from 'src/app/modules/auth/DTO/Auth.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        private jwtService: JwtService
    ) { }

    async signinLocal(payload: AuthDTO) {
        const data = await this.userRepo.findOneBy({ username: payload.username });
        if (!data) throw new UnauthorizedException('Credentials provided are incorrect.');
        if (data.password !== payload.password) throw new UnauthorizedException('Credentials provided are incorrect.');
        return this.signZeUser(data.user_id, data.username, 'user');
    }



    signupLocal(payload: AuthDTO) {
        return null;
    }

    signZeUser(id: number, email: string, type: string) {
        return this.jwtService.sign({
            id,
            email,
            claim: type
        })
    }
}
