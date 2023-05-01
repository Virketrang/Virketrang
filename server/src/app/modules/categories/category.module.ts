import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import CategoryController from './category.controller';
import CategoryService from './category.service';
import { Category } from 'src/app/entities';

@Module({
    imports: [MikroOrmModule.forFeature([Category])],
    controllers: [CategoryController],
    providers: [CategoryService],
})
export default class CategoryModule {}
