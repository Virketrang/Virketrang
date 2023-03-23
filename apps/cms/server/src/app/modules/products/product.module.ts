import { DatabaseModule } from '@database/database.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { StorageService } from '@services/storage/storage.service';
import { Product } from 'src/app/entities';
import ProductController from './product.controller';
import ProductService from './product.service';

@Module({
    imports: [DatabaseModule],
    controllers: [ProductController],
    providers: [ProductService, StorageService],
})
export default class ProductModule {}
