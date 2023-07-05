import { EntityManager, EntityRepository } from '@mikro-orm/postgresql'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@mikro-orm/nestjs'
import { wrap } from '@mikro-orm/core'

import { CreateProduct, UpdateProduct, CreateImage } from '@packages/interfaces'
import { Product } from '@/app/entities'
import { sanitizeObject, calcSort } from '@/app/utils'

import ProductQueryParams from './dto/query.dto'

@Injectable()
export default class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: EntityRepository<Product>,
        private readonly em: EntityManager
    ) {}
    async getProduct(id: string): Promise<Product> {
        const product = await this.productRepository.findOne({ id })

        if (!product) throw new NotFoundException(`Kunne ikke finde noget produkt med id ${id}`)

        return product
    }

    async getProducts({ minPrice, maxPrice, limit, materials, sort, ...params }: ProductQueryParams) {
        const products = await this.productRepository.find(
            sanitizeObject({
                ...params,
                materials: materials ? { $contains: materials } : undefined,
                retailPrice: { $gte: minPrice || 1, $lte: maxPrice || 10000 }
            }),
            {
                populate: ['images'],
                limit: limit,
                orderBy: calcSort(sort)
            }
        )

        if (!products) new NotFoundException('Ingen produkter blev fundet')

        return products
    }

    async createProduct(product: CreateProduct, images: CreateImage[]): Promise<Product> {
        const {
            name,
            stock,
            description,
            retailPrice,
            costPrice,
            category,
            available,
            materials,
            measurement,
            deliveryTime
        } = product

        const newProduct = this.productRepository.create({
            name: name,
            stock: Number(stock),
            description: description,
            retailPrice: Number(retailPrice),
            costPrice: Number(costPrice),
            category,
            images,
            deliveryTime: Number(deliveryTime),
            available: available ? available : true,
            materials,
            measurement
        })

        await this.em.persistAndFlush(newProduct)

        return newProduct
    }

    async updateProduct(id: string, product: UpdateProduct) {
        const { name, description, retailPrice, costPrice } = product

        const existingProduct = await this.getProduct(id)

        wrap(existingProduct).assign({
            name,
            description,
            retailPrice: Number(retailPrice),
            costPrice: Number(costPrice)
        })

        await this.em.persistAndFlush(existingProduct)

        return existingProduct
    }

    async deleteProduct(id: string) {
        const product = await this.productRepository.findOne({ id })

        if (!product) throw new NotFoundException(`Kunne ikke finde noget produkt med id ${id}`)

        return await this.productRepository.removeAndFlush(product)
    }
}
