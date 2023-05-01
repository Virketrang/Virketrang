import { Injectable } from '@nestjs/common';
import { Storage, Bucket } from '@google-cloud/storage';
import { join } from 'path';

const BUCKET_NAME = 'liedecke-noergaard';

@Injectable()
export class StorageService {
    private storage: Storage;
    private bucket: Bucket;

    constructor() {
        this.storage = new Storage({
            projectId: 'liedecke-noergaard',
            keyFilename: join(__dirname, '../../../../../../../../storage.json'),
        });

        this.bucket = this.storage.bucket(BUCKET_NAME);
    }

    upload(fileName: string, buffer: Buffer) {
        const file = this.bucket.file(fileName);

        const stream = file.createWriteStream();

        const result = stream.end(buffer);

        return result;
    }
}
