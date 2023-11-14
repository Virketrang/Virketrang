import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Company, User } from '@/apps/nexus/legacy-server/src/entities'

import CompanyRepository from './company.repository'
import CompanyService from './company.service'
import CompanyController from './company.controller'
import UserModule from '../users/user.module'

@Module({
    providers: [CompanyRepository, CompanyService],
    controllers: [CompanyController],
    imports: [TypeOrmModule.forFeature([Company, User]), UserModule]
})
export default class CompanyModule {}
