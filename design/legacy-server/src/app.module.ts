import { Module } from '@nestjs/common'

import {
    ProductModule,
    DivisionModule,
    SubdivisionModule,
    DatabaseModule,
    ConfigModule,
    AccountModule,
    CompanyModule
} from '@/apps/nexus/legacy-server/src/modules'

@Module({
    imports: [
        ConfigModule,
        DatabaseModule,
        ProductModule,
        DivisionModule,
        SubdivisionModule,
        AccountModule,
        CompanyModule
    ]
})
export class AppModule {}
