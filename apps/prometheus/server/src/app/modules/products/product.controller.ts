import { Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateProduct, CreateImage } from '@packages/interfaces';
import { StorageService } from '@services/storage/storage.service';
import ProductService from './product.service';

@Controller('/products')
export default class ProductController {
    constructor(private readonly storageService: StorageService, private readonly productsService: ProductService) {}

    @Post()
    @UseInterceptors(FilesInterceptor('images[]', 10))
    async createProduct(@UploadedFiles() files: Express.Multer.File[], @Body() body: CreateProduct) {
        let images: CreateImage[] = files.map(file => {
            return {
                url: `https://storage.cloud.google.com/liedecke-noergaard/${file.originalname}`,
                description: 'Test Image',
            };
        });

        files.forEach(file => {
            this.storageService.upload(file.originalname, file.buffer);
        });

        const product = await this.productsService.createProduct(body, images);

        return { status: 'succes', body: product };
    }

    @Get()
    async getProducts() {
        const products = await this.productsService.getProducts();

        console.log(products);

        return { status: 'succes', body: products };
    }

    @Get(':id')
    async getProduct(@Param('id') id: string) {
        const product = await this.productsService.getProduct(id);

        return product;
    }
}
