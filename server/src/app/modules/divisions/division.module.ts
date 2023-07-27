import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Division, Subdivision } from '@/entities'

import DivisionService from './division.service'
import DivisionController from './division.controller'
import DivisionRepository from './division.repository'

@Module({
    providers: [DivisionService, DivisionRepository],
    controllers: [DivisionController],
    imports: [TypeOrmModule.forFeature([Division, Subdivision])]
})
export default class DivisionModule {}
