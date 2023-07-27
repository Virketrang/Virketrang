import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Query,
    UploadedFiles,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'

import { Entity, Http } from '@packages/interfaces'

import { StorageService } from '@/services'
import { File } from '@/types'

import ProductService from './product.service'
import * as Validation from '../../validation/index'

@Controller('/products')
export default class ProductController {
    constructor(private readonly storageService: StorageService, private readonly productsService: ProductService) {}

    @Post()
    @HttpCode(201)
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    @UseInterceptors(FilesInterceptor('images[]', 8))
    async createProduct(@UploadedFiles() files: File[], @Body() body: Validation.Product.Create) {
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

        // console.log({ images: files, ...body })

        const product = await this.productsService.createProduct(body, images)

        return { status: 'success', body: product }
    }

    @Get()
    @HttpCode(200)
    async getProducts(@Query() query: Validation.Product.Query): Promise<Http.Response<Entity.Product>> {
        const products = await this.productsService.getProducts(query)

        return { status: 'success', body: products }
    }

    @Get(':id')
    @HttpCode(200)
    async getProduct(@Param('id') id: string) {
        const product = await this.productsService.getProduct(id)

        return { status: 'success', body: product }
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteProduct(@Param('id') id: string) {
        const product = await this.productsService.deleteProduct(id)

        return { status: 'success', body: product }
    }
}
