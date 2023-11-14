import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common'

import CompanyService from './company.service'

@Controller('companies')
export default class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Get()
    @HttpCode(200)
    async getCompanies() {
        return await this.companyService.getCompanies()
    }

    @Get(':id')
    @HttpCode(200)
    async getCompany(@Param('id') id: string) {
        return await this.companyService.getCompany(id)
    }

    @Post()
    @HttpCode(201)
    async createCompany(
        @Body() createCompany: { company: Workspace.Entity.Company.Create; owners: Workspace.Entity.User[] }
    ) {
        return await this.companyService.createCompany(createCompany.company, createCompany.owners)
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteCompany(@Param('id') id: string) {
        return await this.companyService.deleteCompany(id)
    }
}
