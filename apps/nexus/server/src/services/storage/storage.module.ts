import { Module } from '@nestjs/common'
import StorageService from '@/nexus/server/services/storage/storage.service'

@Module({
    providers: [StorageService],
    exports: [StorageService]
})
export class StorageModule {}
