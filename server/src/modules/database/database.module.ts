import { Logger, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Customer, Division, Employee, Image, Order, Product, Subdivision } from '@/server/entities'
import { __prod__ } from '../../constants'

const logger = new Logger('TypeORM')

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres' as any,
                ssl: __prod__,
                url: configService.get<string>('DATABASE_URL'),
                logger: logger.log.bind(logger) as any,
                synchronize: true,
                entities: [Product, Subdivision, Order, Image, Employee, Division, Customer]
            }),
            inject: [ConfigService]
        })
    ]
})
export default class DatabaseModule {}
