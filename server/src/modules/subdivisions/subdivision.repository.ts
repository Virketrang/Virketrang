import { DataSource, Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'

import { Subdivision } from '@/entities'

@Injectable()
export default class SubdivisionRepository extends Repository<Subdivision> {
    constructor(private dataSource: DataSource) {
        super(Subdivision, dataSource.createEntityManager())
    }

    async getById(id: string) {
        return this.findOne({ where: { id } })
    }
}
