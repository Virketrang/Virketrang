import { Module } from '@nestjs/common'

import { ProductModule, DivisionModule, SubdivisionModule, DatabaseModule, ConfigModule } from '@/modules'

@Module({
    imports: [ConfigModule, DatabaseModule, ProductModule, DivisionModule, SubdivisionModule]
})
export class AppModule {}
