import { MikroORM } from '@mikro-orm/core'
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'

import { AppModule } from '@/app/app.module'

const PORT = process.env.PORT || 8080

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.enableCors({
        credentials: true,
        origin: '*'
    })

    await app.get(MikroORM).getSchemaGenerator().ensureDatabase()
    await app.get(MikroORM).getSchemaGenerator().updateSchema()

    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))

    await app.listen(PORT)
}

bootstrap()
