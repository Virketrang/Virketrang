import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from '@database/database.module';
import { ConfigurationModule } from '@config/config.module';
import { StorageService } from '@services/storage/storage.service';

@Module({
    imports: [ConfigurationModule, DatabaseModule],
    controllers: [AppController],
    providers: [AppService, StorageService],
})
export class AppModule {}
