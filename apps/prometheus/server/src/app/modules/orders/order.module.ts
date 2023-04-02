import { Module } from '@nestjs/common';

import DatabaseModule from '@database/database.module';

import OrderController from './order.controller';
import OrderService from './order.service';

@Module({
    controllers: [OrderController],
    providers: [OrderService],
    imports: [DatabaseModule],
})
export default class OrderModule {}
