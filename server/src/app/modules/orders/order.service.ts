import { InjectRepository } from '@mikro-orm/nestjs'
import { Injectable, NotFoundException } from '@nestjs/common'
import { EntityManager } from '@mikro-orm/postgresql'

import { Order } from '@entities'

import OrderRepository from './order.repository'
import { wrap } from '@mikro-orm/core'

@Injectable()
export default class OrderService {
    constructor(
        @InjectRepository(Order) private readonly orderRepository: OrderRepository,
        private readonly em: EntityManager
    ) {}

    async create(dto: Order): Promise<Order> {
        const order = this.orderRepository.create(dto)

        await this.em.persistAndFlush(order)

        return order
    }

    async update(id: string, dto: Partial<Order>) {
        const order = await this.get(id)

        wrap(order).assign(dto)

        await this.em.persistAndFlush(order)

        return order
    }

    async delete(id: string): Promise<number> {
        return this.orderRepository.nativeDelete({ id })
    }

    async get(id: string): Promise<Order> {
        const order = await this.orderRepository.findOne({ id })

        if (!order) throw new NotFoundException('Could not find an order with the given id')

        return order
    }

    async getAll(): Promise<Order[]> {
        const orders = await this.orderRepository.findAll()

        if (!orders) throw new NotFoundException('Could not find any orders')

        return orders
    }
}
