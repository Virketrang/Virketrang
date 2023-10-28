import { Module } from '@nestjs/common'

import AccountController from './account.controller'
import AccountService from './account.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Account } from '@/nexus/server/entities'

@Module({
    controllers: [AccountController],
    providers: [AccountService],
    imports: [TypeOrmModule.forFeature([Account])]
})
export default class AccountModule {}
