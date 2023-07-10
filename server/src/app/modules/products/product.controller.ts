import { Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'

import { Entity } from '@packages/interfaces'

import { StorageService } from '@/app/services'
import { File } from '@/app/types'

import ProductService from './product.service'
import ProductQueryParams from './dto/query.dto'
import CreateProductDTO from './dto/create-product.dto'

@Controller('/products')
export default class ProductController {
    constructor(private readonly storageService: StorageService, private readonly productsService: ProductService) {}

    @Post()
    @UseInterceptors(FilesInterceptor('images[]', 8))
    async createProduct(@UploadedFiles() files: File[], @Body() body: CreateProductDTO) {
        let images: Entity.Image.Create[] = files.map((file) => {
            return {
                url: `https://storage.googleapis.com/liedecke-noergaard/${file.originalname}`,
                alt: 'Test Image',
                width: 4096,
                height: 4096
            }
        })

        files.forEach((file) => {
            this.storageService.upload(file.originalname, file.buffer)
        })

        console.log({ images: files, ...body })

        const product = await this.productsService.createProduct(body, images)

        return { status: 'succes', body: product }
    }

    @Get()
    async getProducts(@Query() query: ProductQueryParams) {
        const products = await this.productsService.getProducts(query)

        return { status: 'succes', query, count: products.length, body: products }
    }

    @Get(':id')
    async getProduct(@Param('id') id: string) {
        const product = await this.productsService.getProduct(id)

        return product
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {
        const product = await this.productsService.deleteProduct(id)

        return { status: 'succes', body: product }
    }
}
