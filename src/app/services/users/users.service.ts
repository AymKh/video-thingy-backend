/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/app/models/User';
import { CreateUsertParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }


    getAllUsers() {
        return [];
    }


    getOneUser(id: number) {
        return null;
    }


    createOneUser(payload: CreateUsertParams) {
        return null;
    }


    updateOneUser(id: number) {
        return null;
    }


    deleteOneUser(id: number) {
        return null;
    }
}
