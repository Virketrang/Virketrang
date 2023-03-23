import { DatabaseModule } from '@database/database.module';
import { Module } from '@nestjs/common';
import CategoryController from './category.controller';
import CategoryService from './category.service';

@Module({ imports: [DatabaseModule], controllers: [CategoryController], providers: [CategoryService] })
export default class CategoryModule {}
