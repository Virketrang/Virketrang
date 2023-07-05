import { Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'

import { CreateProduct, CreateImage } from '@packages/interfaces'

import { StorageService } from '@/app/services'

import ProductService from './product.service'
import ProductQueryParams from './dto/query.dto'

@Controller('/products')
export default class ProductController {
    constructor(private readonly storageService: StorageService, private readonly productsService: ProductService) {}

    @Post()
    @UseInterceptors(FilesInterceptor('images[]', 8))
    async createProduct(@UploadedFiles() files: Express.Multer.File[], @Body() body: any) {
        let images: CreateImage[] = files.map((file) => {
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

        const product = await this.productsService.createProduct(
            {
                name: body.name,
                description: { short: body.shortDescription, long: body.longDescription },
                materials: body.materials,
                costPrice: body.costPrice,
                retailPrice: body.retailPrice,
                stock: body.stock,
                deliveryTime: body.deliveryTime,
                category: body.category,
                available: body.available === 'true' ? true : false,
                measurement: {
                    unit: body.unit,
                    value: 100
                }
            },
            images
        )

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
