import { Module, Logger } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import {
    Bank,
    Subdivision,
    Customer,
    Employee,
    Product,
    Record,
    Image,
    Measurement,
    Description,
    Division
} from './entities'

import { ProductModule, DivisionModule, SubdivisionModule } from '@/app/modules'

const logger = new Logger('MikroORM')

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env.development'
        }),
        MikroOrmModule.forRootAsync({
            imports: [ConfigModule],

            useFactory: (configService: ConfigService) => ({
                entities: [
                    Product,
                    Image,
                    Subdivision,
                    Customer,
                    Employee,
                    Bank,
                    Record,
                    Measurement,
                    Description,
                    Division
                ],
                dbName: 'webshop',
                type: 'postgresql',
                host: 'localhost',
                user: 'postgres',
                password: '',
                port: 5432,
                ssl: {},
                debug: true,
                logger: logger.log.bind(logger),
                migrations: {
                    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
                    path: './migrations', // path to the folder with migrations
                    pathTs: undefined, // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)
                    glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
                    transactional: true, // wrap each migration in a transaction
                    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
                    allOrNothing: true, // wrap all migrations in master transaction
                    dropTables: true, // allow to disable table dropping
                    safe: false, // allow to disable table and column dropping
                    snapshot: true, // save snapshot when creating new migrations
                    emit: 'ts' // migration generation mode
                }
            }),
            inject: [ConfigService]
        }),
        ProductModule,
        DivisionModule,
        SubdivisionModule
    ]
})
export class AppModule {}
