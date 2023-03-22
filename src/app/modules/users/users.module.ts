/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/app/models/User';
import { UsersController } from './users.controller';
import { UsersService } from 'src/app/services/users/users.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule { }
