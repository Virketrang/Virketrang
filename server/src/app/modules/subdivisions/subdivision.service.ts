import { EntityManager, EntityRepository } from '@mikro-orm/core'
import { InjectRepository } from '@mikro-orm/nestjs'
import { Injectable, NotFoundException } from '@nestjs/common'

import { Subdivision } from '@/app/entities'
import { Entity } from '@packages/interfaces'

@Injectable()
export default class SubdivisionService {
    constructor(
        @InjectRepository(Subdivision)
        private readonly subdivisionRepository: EntityRepository<Subdivision>,
        private readonly em: EntityManager
    ) {}

    async create(createSubdivision: Entity.Subdivision.Create): Promise<Subdivision> {
        const subdivision = this.subdivisionRepository.create(createSubdivision)

        await this.em.persistAndFlush(subdivision)

        return subdivision
    }

    async get(id: string): Promise<Subdivision> {
        const subdivision = await this.subdivisionRepository.findOne({ id })

        if (!subdivision) throw new NotFoundException(`Kunne ikke finde en inddeling med id ${id}`)

        return subdivision
    }

    async getAll(): Promise<Subdivision[]> {
        const subdivisions = await this.subdivisionRepository.findAll()

        if (!subdivisions) throw new NotFoundException('Kunne ikke finde nogen inddelinger')

        return subdivisions
    }
}
