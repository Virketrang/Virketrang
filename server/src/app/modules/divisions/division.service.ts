import { InjectRepository } from '@mikro-orm/nestjs'
import { Injectable, NotFoundException } from '@nestjs/common'
import { EntityManager, EntityRepository } from '@mikro-orm/core'

import { Division } from '@/app/entities'
import { Entity } from '@packages/interfaces'

@Injectable()
export default class DivisionService {
    constructor(
        @InjectRepository(Division)
        private readonly divisionRepository: EntityRepository<Division>,
        private readonly em: EntityManager
    ) {}

    async create(createDivision: Entity.Division.Create): Promise<Division> {
        const newDivision = this.divisionRepository.create(createDivision)

        await this.em.persistAndFlush(newDivision)

        return newDivision
    }

    async get(id: string): Promise<Division> {
        const division = await this.divisionRepository.findOne({ id }, { populate: ['subdivisions'] })

        if (!division) throw new NotFoundException('Could not find an division with the given id')

        return division
    }

    async getAll(): Promise<Division[]> {
        const divisions = await this.divisionRepository.findAll({ populate: ['subdivisions'] })

        if (!divisions) throw new NotFoundException('Kunne ikke finde nogen inddelinger')

        return divisions
    }

    async remove(id: string): Promise<void> {
        const division = await this.divisionRepository.findOne({ id })

        if (!division) throw new NotFoundException(`Kunne ikke finde nogen inddeling med id ${id}`)

        return await this.em.removeAndFlush(division)
    }
}
