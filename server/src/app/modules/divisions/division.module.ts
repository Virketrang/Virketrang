import { Module } from '@nestjs/common'

import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Division, Subdivision } from '@/app/entities'

import DivisionService from './division.service'
import DivisionController from './division.controller'

@Module({
    providers: [DivisionService],
    controllers: [DivisionController],
    imports: [MikroOrmModule.forFeature([Division, Subdivision])]
})
export default class DivisionModule {}
