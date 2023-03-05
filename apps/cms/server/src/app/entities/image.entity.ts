import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export default class Image extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column(() => URL)
    url!: URL;
}
