import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Subdivision } from '@/nexus/server/entities'

import SubdivisionService from './subdivision.service'
import SubdivisionController from './subdivision.controller'
import SubdivisionRepository from './subdivision.repository'

@Module({
    providers: [SubdivisionService, SubdivisionRepository],
    controllers: [SubdivisionController],
    imports: [TypeOrmModule.forFeature([Subdivision])]
})
export default class SubdivisionModule {}
