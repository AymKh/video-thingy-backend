/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Video } from "./Video";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn()
    comment_id: number;

    @Column()
    comment_body: string;

    @CreateDateColumn()
    comment_created_on: Date;

    @UpdateDateColumn()
    comment_modified_on: Date;

    @Column()
    comment_up_votes: number;

    @Column()
    comment_down_votes: number;

    @ManyToOne(() => Video, video => video.comments)
    video: Video;
}