import { Body, Controller, Get, Post } from '@nestjs/common'

import { Entity } from '@packages/interfaces'

import SubdivisionService from './subdivision.service'

@Controller('/subdivisions')
export default class SubdivisionController {
    constructor(private readonly subdivisionService: SubdivisionService) {}

    @Post()
    async createSubdivision(@Body() body: Entity.Subdivision.Create) {
        const subdivision = await this.subdivisionService.create(body)

        return { status: 'success', body: subdivision }
    }

    @Get(':id')
    async getSubdivision(id: string) {
        const subdivision = await this.subdivisionService.get(id)

        return { status: 'success', body: subdivision }
    }
}
