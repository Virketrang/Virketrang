import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Product extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column({ default: 0 })
    price!: number;

    @Column({ default: 0 })
    stock!: number;

    @Column({ default: true })
    available!: boolean;

    //   @OneToOne(() => Discount, (discount) => discount.product, { nullable: true })
    //   discount: Discount;

    //   @ManyToMany(() => Category, (category) => category.products)
    //   @JoinTable()
    //   categories: Category[];
}
