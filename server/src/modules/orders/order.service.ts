import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Order } from '@/server/entities'

@Injectable()
export default class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>
    ) {}

    async create(dto: Order): Promise<Order> {
        const order = this.orderRepository.create(dto)

        await this.orderRepository.save(order)

        return order
    }

    async update(id: string, dto: Partial<Order>) {
        const order = await this.get(id)

        await this.orderRepository.save({ ...order, ...dto })

        return order
    }

    async delete(id: string) {
        const order = await this.orderRepository.findOne({ where: { id } })

        if (!order) throw new NotFoundException(`Kunne ikke finde nogen ordre med id ${id}`)

        return await this.orderRepository.remove(order)
    }

    async get(id: string): Promise<Order> {
        const order = await this.orderRepository.findOne({ where: { id } })

        if (!order) throw new NotFoundException('Could not find an order with the given id')

        return order
    }

    async getAll(): Promise<Order[]> {
        const orders = await this.orderRepository.find()

        if (!orders) throw new NotFoundException('Could not find any orders')

        return orders
    }
}
