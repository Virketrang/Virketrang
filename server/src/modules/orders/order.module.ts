import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { Order } from '@/server/entities'

import OrderController from './order.controller'
import OrderService from './order.service'

@Module({
    controllers: [OrderController],
    providers: [OrderService],
    imports: [TypeOrmModule.forFeature([Order])]
})
export default class OrderModule {}
