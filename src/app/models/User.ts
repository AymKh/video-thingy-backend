/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    passwordConfirmation: string;

    @CreateDateColumn()
    created_cat: Date;

    @UpdateDateColumn()
    updated_at: Date;

}