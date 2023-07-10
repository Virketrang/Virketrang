import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'

import { Entity } from '@packages/index'

import DivisionService from './division.service'

@Controller('/divisions')
export default class DivisionController {
    constructor(private readonly divisionService: DivisionService) {}

    @Get(':id')
    async getDivision(@Param('id') id: string) {
        return { status: 'success', body: await this.divisionService.get(id) }
    }

    @Get()
    async getDivisions() {
        return { status: 'success', body: await this.divisionService.getAll() }
    }

    @Post()
    async createDivision(@Body() body: Entity.Division.Create) {
        return { status: 'success', body: await this.divisionService.create(body) }
    }

    @Delete(':id')
    async deleteDivision(@Param('id') id: string) {
        return { status: 'success', body: await this.divisionService.remove(id) }
    }
}
