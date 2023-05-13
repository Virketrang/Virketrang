import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Module } from '@nestjs/common'

import { Category } from '@entities'

import CategoryController from './category.controller'
import CategoryService from './category.service'

@Module({
    imports: [MikroOrmModule.forFeature([Category])],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export default class CategoryModule {}
