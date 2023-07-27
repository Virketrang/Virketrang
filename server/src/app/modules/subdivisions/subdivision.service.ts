import { Injectable, NotFoundException } from '@nestjs/common'

import { Subdivision } from '@/entities'
import { Entity } from '@packages/interfaces'
import SubdivisionRepository from './subdivision.repository'

@Injectable()
export default class SubdivisionService {
    constructor(private readonly subdivisionRepository: SubdivisionRepository) {}

    async create(createSubdivision: Entity.Subdivision.Create): Promise<Subdivision> {
        const subdivision = this.subdivisionRepository.create(createSubdivision)

        await this.subdivisionRepository.save(subdivision)

        return subdivision
    }

    async get(id: string): Promise<Subdivision> {
        const subdivision = await this.subdivisionRepository.getById(id)

        if (!subdivision) throw new NotFoundException(`Kunne ikke finde en inddeling med id ${id}`)

        return subdivision
    }

    async getAll(): Promise<Subdivision[]> {
        const subdivisions = await this.subdivisionRepository.find()

        if (!subdivisions) throw new NotFoundException('Kunne ikke finde nogen inddelinger')

        return subdivisions
    }
}
