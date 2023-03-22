/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/User';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'lol-secret-here'
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
