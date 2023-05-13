import { EntityRepository } from '@mikro-orm/postgresql'

import { Order } from '@entities'

export default class OrderRepository extends EntityRepository<Order> {}
