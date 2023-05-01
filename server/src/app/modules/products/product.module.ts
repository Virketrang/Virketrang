import { Module } from '@nestjs/common';

import DatabaseModule from '@database/database.module';
import { StorageService } from '@services/storage/storage.service';

import ProductController from './product.controller';
import ProductService from './product.service';

@Module({
    imports: [DatabaseModule],
    controllers: [ProductController],
    providers: [ProductService, StorageService],
})
export default class ProductModule {}
