import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import DatabaseModule from '@database/database.module';
import { ConfigurationModule } from '@config/config.module';
import ProductModule from '@modules/products/product.module';
import CategoryModule from '@modules/categories/category.module';

@Module({
    imports: [ConfigurationModule, DatabaseModule, ProductModule, CategoryModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
