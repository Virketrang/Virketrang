import { Module } from '@nestjs/common'
import { MikroOrmModule } from '@mikro-orm/nestjs'

import { Order } from '@entities'

import OrderController from './order.controller'
import OrderService from './order.service'

@Module({
    controllers: [OrderController],
    providers: [OrderService],
    imports: [MikroOrmModule.forFeature([Order])]
})
export default class OrderModule {}
