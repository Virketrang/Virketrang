import { Column } from 'typeorm'

export default abstract class PhoneNumber implements Workspace.Entity.PhoneNumber {
    @Column()
    countryCode!: number

    @Column()
    subscriberNumber!: number
}
