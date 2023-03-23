import { Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export default abstract class Invoice {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string;
}
