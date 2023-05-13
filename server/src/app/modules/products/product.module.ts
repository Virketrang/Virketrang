import { Module } from '@nestjs/common'
import { MikroOrmModule } from '@mikro-orm/nestjs'

import { StorageService } from '@services'
import { Product } from '@entities'

import ProductController from './product.controller'
import ProductService from './product.service'

@Module({
    imports: [MikroOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService, StorageService]
})
export default class ProductModule {}
