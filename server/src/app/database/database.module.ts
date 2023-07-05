import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Module, Logger } from '@nestjs/common'

import { __prod__ } from '../../constants'
import { Bank, Category, Customer, Description, Employee, Image, Measurement, Product, Record } from '../entities'
import { ConfigModule, ConfigService } from '@nestjs/config'

const logger = new Logger('MikroORM')

@Module({
    imports: [
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
        MikroOrmModule.forFeature([Product, Image, Category, Customer, Employee, Bank, Record])
    ],
    exports: [MikroOrmModule]
})
export default class DatabaseModule {}
