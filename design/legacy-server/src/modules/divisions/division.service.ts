import { Injectable, NotFoundException } from '@nestjs/common'

import DivisionRepository from './division.repository'
import { Division } from '@/apps/nexus/legacy-server/src/entities'

@Injectable()
export default class DivisionService {
    constructor(private readonly divisionRepository: DivisionRepository) {}

    async create(createDivision: Workspace.Entity.Division.Create): Promise<Division> {
        return await this.divisionRepository.save(createDivision)
    }

    async get(id: string): Promise<Division> {
        const division = await this.divisionRepository.findOne({ where: { id }, relations: ['subdivisions'] })

        if (!division) throw new NotFoundException('Could not find an division with the given id')

        return division
    }

    async getAll(): Promise<Division[]> {
        const divisions = await this.divisionRepository.find({ relations: ['subdivisions'] })

        if (!divisions) throw new NotFoundException('Kunne ikke finde nogen inddelinger')

        return divisions
    }

    async remove(id: string) {
        const division = await this.divisionRepository.findOne({ where: { id } })

        if (!division) throw new NotFoundException(`Kunne ikke finde nogen inddeling med id ${id}`)

        return await this.divisionRepository.remove(division)
    }
}
