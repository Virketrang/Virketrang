import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Demo from '@packages/interfaces';

const PORT = process.env.PORT || 8080;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT);
}
bootstrap();
