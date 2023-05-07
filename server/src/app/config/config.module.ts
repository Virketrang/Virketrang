import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'
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
        })
    ]
})
export class ConfigurationModule {}
