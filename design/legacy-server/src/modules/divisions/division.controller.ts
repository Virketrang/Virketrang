import { Body, Controller, Delete, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common'

import * as Validation from '@/apps/nexus/legacy-server/src/validation'

import DivisionService from './division.service'

@Controller('/divisions')
export default class DivisionController {
    constructor(private readonly divisionService: DivisionService) {}

    @Get(':id')
    @HttpCode(200)
    async getDivision(@Param('id') id: string) {
        return { status: 'success', body: await this.divisionService.get(id) }
    }

    @Get()
    @HttpCode(200)
    async getDivisions() {
        return { status: 'success', body: await this.divisionService.getAll() }
    }

    @Post()
    @HttpCode(201)
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async createDivision(@Body() body: Validation.Division.Create) {
        return { status: 'success', body: await this.divisionService.create(body) }
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteDivision(@Param('id') id: string) {
        return { status: 'success', body: await this.divisionService.remove(id) }
    }
}
