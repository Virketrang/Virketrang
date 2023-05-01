import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { __prod__ } from '../../constants';
import { Bank, Category, Customer, Employee, Image, Product, Record } from '../entities';

@Module({
    imports: [
        MikroOrmModule.forRoot(),
        MikroOrmModule.forFeature([Product, Image, Category, Customer, Employee, Bank, Record]),
    ],
    exports: [MikroOrmModule],
})
export default class DatabaseModule {}
