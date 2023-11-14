import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Product } from '@/apps/nexus/legacy-server/src/entities'
import { sanitizeObject } from '@/apps/nexus/legacy-server/src/utils'
import * as Validation from '@/apps/nexus/legacy-server/src/validation'

@Injectable()
export default class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}
    async getProduct(id: string): Promise<Product> {
        const product = await this.productRepository.findOne({ where: { id } })

        if (!product) throw new NotFoundException(`Kunne ikke finde noget produkt med id ${id}`)

        return product
    }

    async getProducts({ minPrice, maxPrice, materials, ...params }: Validation.Product.Query) {
        const products = await this.productRepository.find(
            sanitizeObject({
                ...params,
                materials: materials ? { $contains: materials } : undefined,
                retailPrice: { $gte: minPrice || 1, $lte: maxPrice || 10000 }
            })
        )

        if (!products) new NotFoundException('Ingen produkter blev fundet')

        return products
    }

    async createProduct(product: Validation.Product.Create, images: Workspace.Entity.Image.Create[]): Promise<Product> {
        const newProduct = this.productRepository.create({ ...product, images })

        await this.productRepository.save(newProduct)

        return newProduct
    }

    async updateProduct(id: string, product: Workspace.Entity.Product.Update) {
        const { name, description, retailPrice, costPrice } = product

        const existingProduct = await this.getProduct(id)

        await this.productRepository.save({ ...existingProduct, name, description, retailPrice, costPrice })

        return existingProduct
    }

    async deleteProduct(id: string) {
        const product = await this.productRepository.findOne({ where: { id } })

        if (!product) throw new NotFoundException(`Kunne ikke finde noget produkt med id ${id}`)

        return await this.productRepository.remove(product)
    }
}
