import { Injectable } from '@nestjs/common'

import CompanyRepository from './company.repository'
import UserService from '../users/user.service'

@Injectable()
export default class CompanyService {
    constructor(private readonly companyRepository: CompanyRepository, private readonly userService: UserService) {}

    async createCompany(
        createCompany: Workspace.Entity.Company.Create,
        createOwners: Workspace.Entity.User.Create[]
    ): Promise<{ company: Workspace.Entity.Company; owners: Workspace.Entity.User[] }> {
        const company = await this.companyRepository.save(createCompany)

        const owners = await this.userService.createOwners(createOwners.map((owner) => ({ ...owner, company })))

        return { company, owners }
    }

    async getCompanies(): Promise<Workspace.Entity.Company[]> {
        return await this.companyRepository.find()
    }

    async getCompany(id: string): Promise<Workspace.Entity.Company> {
        return await this.companyRepository.getById(id)
    }

    async deleteCompany(id: string): Promise<void> {
        await this.companyRepository.delete(id)
    }
}
