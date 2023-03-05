import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { StorageService } from '@services/storage/storage.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly storageService: StorageService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: any) {
        this.storageService.upload(file.originalname, file.buffer);

        return 'File uploaded!';
    }
}
