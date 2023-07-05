import { Embeddable, Property } from '@mikro-orm/core'

@Embeddable()
export default abstract class Measurement {
    @Property()
    unit!: string

    @Property()
    value!: number
}
