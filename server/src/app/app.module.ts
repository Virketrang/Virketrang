import { Module, Logger } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Bank, Category, Customer, Employee, Product, Record, Image, Measurement, Description } from './entities'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ProductModule, CategoryModule } from '@/app/modules'

import * as joi from 'joi'

const logger = new Logger('MikroORM')

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
        MikroOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                entities: [Product, Image, Category, Customer, Employee, Bank, Record, Measurement, Description],
                dbName: 'webshop',
                type: 'postgresql',
                host: 'localhost',
                user: 'postgres',
                password: '',
                port: 5432,
                ssl: {},
                debug: true,
                logger: logger.log.bind(logger)
            }),
            inject: [ConfigService]
        }),
        ProductModule,
        CategoryModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
