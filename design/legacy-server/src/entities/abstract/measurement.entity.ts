import { Column } from 'typeorm'

export default abstract class Measurement implements Workspace.Entity.Measurement {
    @Column()
    unit!: string

    @Column()
    value!: number
}
