import { Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export default class Customer extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
}
