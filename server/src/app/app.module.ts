import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import DatabaseModule from '@database/database.module'
import ProductModule from '@modules/products/product.module'
import CategoryModule from '@modules/categories/category.module'
import { ConfigModule } from '@nestjs/config'

import * as joi from 'joi'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env.development',
            validationSchema: joi.object({
                POSTGRES_HOST: joi.string().required(),
                POSTGRES_PORT: joi.number().required(),
                POSTGRES_USER: joi.string().required(),
                POSTGRES_DATABASE: joi.string().required(),
                PORT: joi.number().required()
            })
        }),
        DatabaseModule,
        ProductModule,
        CategoryModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
