import { EntityRepository } from '@mikro-orm/postgresql'

import { Order } from '@/app/entities'

export default class OrderRepository extends EntityRepository<Order> {}
