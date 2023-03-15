/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    video_createdOn: Date;

    @Column()
    video_modifiedOn: Date;
}