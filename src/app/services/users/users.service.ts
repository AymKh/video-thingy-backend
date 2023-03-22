/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/app/models/User';
import { CreateUsertParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }


    getAllUsers() {
        return this.userRepo.find();
    }


    getOneUser(id: number) {
        return this.userRepo.findOneBy({ user_id: id });
    }


    createOneUser(payload: CreateUsertParams) {
        const data = this.userRepo.create({ ...payload });
        return this.userRepo.save(data);
    }


    updateOneUser(id: number, payload: UpdateUserParams) {
        return this.userRepo.update({ user_id: id }, { ...payload });
    }


    deleteOneUser(id: number) {
        return this.userRepo.delete({ user_id: id });
    }
}
