import { DataSource, Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'

import { Division } from '@/server/entities'

@Injectable()
export default class DivisionRepository extends Repository<Division> {
    constructor(private dataSource: DataSource) {
        super(Division, dataSource.createEntityManager())
    }

    async getById(id: string) {
        return this.findOne({ where: { id } })
    }
}
