import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'
import { resolve } from 'path'

@Module({
    imports: [
        NestConfigModule.forRoot({
            envFilePath: resolve(__dirname, '../../../../../', '.env')
        })
    ]
})
export default class ConfigModule {}
