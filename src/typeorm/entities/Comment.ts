/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn()
    comment_id: number;

    @Column()
    comment_body: string;

    @Column()
    video: number;

    @Column()
    comment_created_on: Date;

    @Column()
    comment_modifiedon: Date;

    @Column()
    comment_up_votes: number;

    @Column()
    comment_down_votes: number;
}