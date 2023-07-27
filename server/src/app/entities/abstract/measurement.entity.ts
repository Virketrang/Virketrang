import { Column } from 'typeorm'

export default abstract class Measurement {
    @Column()
    unit!: string

    @Column()
    value!: number
}
