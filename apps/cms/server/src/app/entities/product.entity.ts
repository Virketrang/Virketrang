import { BaseEntity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Image from './image.entity';

export default class Product extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column(() => String)
    name!: string;

    @OneToMany()
    images!: Image[]
}
