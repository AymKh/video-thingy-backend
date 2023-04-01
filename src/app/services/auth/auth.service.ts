/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthDTO } from 'src/app/modules/auth/DTO/Auth.dto';
import { User } from 'src/app/models/User';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>
    ) { }

    async signinLocal(payload: AuthDTO) {
        const user = await this.userRepo.findOneBy({ username: payload.username });
        if (!user) throw new UnauthorizedException('Credentials provided are incorrect.');
        if (user.password !== payload.password) throw new UnauthorizedException('Credentials provided are incorrect.');
        return user;
    }
}