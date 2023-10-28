import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from '@/nexus/server/entities'

import UserService from './user.service'
import UserController from './user.controller'
import UserRepository from './user.repository'

@Module({
    controllers: [UserController],
    providers: [UserService, UserRepository],
    imports: [TypeOrmModule.forFeature([User])],
    exports: [UserService]
})
export default class UserModule {}
