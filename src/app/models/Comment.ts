/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn()
    comment_id: number;

    @Column()
    comment_body: string;

    @Column()
    video: number;

    @CreateDateColumn()
    comment_created_on: Date;

    @UpdateDateColumn()
    comment_modified_on: Date;

    @Column()
    comment_up_votes: number;

    @Column()
    comment_down_votes: number;
}