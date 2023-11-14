import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Subdivision } from '@/apps/nexus/legacy-server/src/entities'

import CategoryController from './category.controller'
import CategoryService from './category.service'

@Module({
    imports: [TypeOrmModule.forFeature([Subdivision])],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export default class CategoryModule {}
