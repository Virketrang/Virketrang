import { Logger, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Bank, Customer, Division, Employee, Image, Order, Product, Subdivision } from '@/entities'

const logger = new Logger('TypeORM')

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                ssl: true,
                url: configService.get<string>('DATABASE_URL'),
                logger: logger.log.bind(logger),
                synchronize: true,
                entities: [Product, Subdivision, Order, Image, Employee, Division, Customer, Bank]
            }),
            inject: [ConfigService]
        })
    ]
})
export default class DatabaseModule {}
