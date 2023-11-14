import { DataSource, Repository } from 'typeorm'
import { Injectable, NotFoundException } from '@nestjs/common'

import { User } from '@/apps/nexus/legacy-server/src/entities'

@Injectable()
export default class UserRepository extends Repository<User> {
    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager())
    }

    async getById(id: string) {
        const result = await this.findOne({ where: { id } })
        if (!result) throw new NotFoundException('User not found')
        return result
    }
}
