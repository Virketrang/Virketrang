import { DataSource, Repository } from 'typeorm'
import { Injectable, NotFoundException } from '@nestjs/common'

import { Company } from '@/apps/nexus/legacy-server/src/entities'

@Injectable()
export default class CompanyRepository extends Repository<Company> {
    constructor(private dataSource: DataSource) {
        super(Company, dataSource.createEntityManager())
    }

    async getById(id: string): Promise<Company> {
        const result = await this.findOne({ where: { id } })
        if (!result) throw new NotFoundException('Company not found')
        return result
    }
}
