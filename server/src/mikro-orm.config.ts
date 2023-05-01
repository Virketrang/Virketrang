import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { Product, Image, Category, Customer, Employee, Bank, Record } from './app/entities';

const logger = new Logger('MikroORM');

const config: Options = {
    entities: [Product, Image, Category, Customer, Employee, Bank, Record],
    dbName: 'webshop',
    type: 'postgresql',
    host: 'localhost',
    user: 'postgres',
    password: '',
    port: 5432,
    debug: true,
    logger: logger.log.bind(logger),
};

export default config;
