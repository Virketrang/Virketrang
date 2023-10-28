import { Logger, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import {
    Account,
    AnnualReport,
    BalanceSheet,
    Company,
    Customer,
    Division,
    Permission,
    Role,
    Image,
    IncomeStatement,
    Order,
    Product,
    Subdivision,
    User,
    ProductionUnit,
    Content,
    ContentType,
    ContentTypeField,
    Payslip,
    PayPeriod,
    VatCode,
    ApiKey,
    CreditNote,
    FixedAssetGroup,
    FixedAssetRegister,
    Invoice
} from '@/nexus/server/entities'
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
                logging: true,
                dropSchema: true,
                entities: [
                    Product,
                    Subdivision,
                    Order,
                    Image,
                    Permission,
                    Role,
                    Division,
                    Customer,
                    Account,
                    Company,
                    BalanceSheet,
                    IncomeStatement,
                    AnnualReport,
                    User,
                    ProductionUnit,
                    Content,
                    ContentType,
                    ContentTypeField,
                    Payslip,
                    PayPeriod,
                    VatCode,
                    ApiKey,
                    CreditNote,
                    FixedAssetGroup,
                    FixedAssetRegister,
                    Invoice
                ]
            }),
            inject: [ConfigService]
        })
    ]
})
export default class DatabaseModule {}
