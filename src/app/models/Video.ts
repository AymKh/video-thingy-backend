/* eslint-disable prettier/prettier */

import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Comment } from "./Comment";

@Entity('videos')
export class Video {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    video_id;

    @Column()
    title: string;

    @Column()
    video_link: string;

    @Column()
    video_genre: string;

    @Column()
    video_visibility: boolean;

    @Column()
    video_views: number;

    @CreateDateColumn()
    video_createdOn: Date;

    @UpdateDateColumn()
    video_modifiedOn: Date;

    @OneToMany(() => Comment, comment => comment.video_id)
    comment_id: number;
}