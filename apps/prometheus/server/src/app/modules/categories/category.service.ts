import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from 'src/app/entities';

@Injectable()
export default class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: EntityRepository<Category>
    ) {}

    async createCategory(name: string) {
        const category = this.categoryRepository.create({ name });

        await this.categoryRepository.persistAndFlush(category);

        return category;
    }

    async getCategories() {
        const categories = await this.categoryRepository.findAll();

        if (!categories) throw new NotFoundException('Kunne ikke finde nogen kategorier');

        return categories;
    }
}
