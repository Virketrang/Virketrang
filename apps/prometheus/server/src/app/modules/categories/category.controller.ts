import { Body, Controller, Get, Post } from '@nestjs/common';
import CategoryService from './category.service';

@Controller('/categories')
export default class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    async createCategory(@Body() { name }: { name: string }) {
        console.log(name, 'REQUEST');
        const category = await this.categoryService.createCategory(name);

        return { status: 'succes', body: category };
    }

    @Get()
    async getCategories() {
        const categories = await this.categoryService.getCategories();

        return { status: 'succes', body: categories };
    }
}
