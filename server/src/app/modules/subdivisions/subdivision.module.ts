import { Module } from '@nestjs/common'
import { MikroOrmModule } from '@mikro-orm/nestjs'

import { Subdivision } from '@/app/entities'

import SubdivisionService from './subdivision.service'
import SubdivisionController from './subdivision.controller'

@Module({
    providers: [SubdivisionService],
    controllers: [SubdivisionController],
    imports: [MikroOrmModule.forFeature([Subdivision])]
})
export default class SubdivisionModule {}
