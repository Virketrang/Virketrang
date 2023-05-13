import { EntityManager, EntityRepository } from '@mikro-orm/postgresql'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@mikro-orm/nestjs'
import { Image, Product } from 'src/app/entities'
import { CreateProduct, UpdateProduct, CreateImage } from '@packages/interfaces'
import { wrap } from '@mikro-orm/core'

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

    async getProducts() {
        const products = await this.productRepository.findAll({ populate: ['images'] })

        if (!products) new NotFoundException('Ingen produkter blev fundet')

        return products
    }

    async createProduct(product: CreateProduct, images: CreateImage[]): Promise<Product> {
        const { name, stock, description, retailPrice, costPrice, category, type, available } = product

        const newProduct = this.productRepository.create({
            name: name,
            stock: Number(stock),
            description: description,
            retailPrice: Number(retailPrice),
            costPrice: Number(costPrice),
            type,
            images,
            category,
            available: available ? available : true
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
