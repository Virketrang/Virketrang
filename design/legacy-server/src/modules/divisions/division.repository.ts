import { DataSource, Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'

import { Division } from '@/apps/nexus/legacy-server/src/entities'

@Injectable()
export default class DivisionRepository extends Repository<Division> {
    constructor(private dataSource: DataSource) {
        super(Division, dataSource.createEntityManager())
    }

    async getById(id: string) {
        return this.findOne({ where: { id } })
    }
}
