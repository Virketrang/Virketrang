import { Module } from '@nestjs/common'
import StorageService from '@/apps/nexus/legacy-server/src/services/storage/storage.service'

@Module({
    providers: [StorageService],
    exports: [StorageService]
})
export class StorageModule {}
