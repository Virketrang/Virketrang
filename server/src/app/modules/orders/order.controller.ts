import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'

import { Order } from '@/entities'
import OrderService from './order.service'

@Controller('/orders')
export default class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get(':id')
    async get(@Param('id') id: string) {
        return await this.orderService.get(id)
    }

    @Get()
    async getAll() {
        return await this.orderService.getAll()
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.orderService.delete(id)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: Partial<Order>) {
        return await this.orderService.update(id, body)
    }

    @Post()
    async create(@Body() order: Order): Promise<Order> {
        return await this.orderService.create(order)
    }
}
