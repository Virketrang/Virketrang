import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { StorageService } from '@/apps/nexus/legacy-server/src/services'
import { Product } from '@/apps/nexus/legacy-server/src/entities'

import ProductController from './product.controller'
import ProductService from './product.service'

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService, StorageService]
})
export default class ProductModule {}
