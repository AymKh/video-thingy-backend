/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/app/models/User";
import { AuthService } from "src/app/services/auth/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) { super(); }

    async validate(username: string, password: string): Promise<User> {
        const data = await this.authService.signinLocal({ username, password });
        if (!data)
            throw new UnauthorizedException;
        return data;
    }
}