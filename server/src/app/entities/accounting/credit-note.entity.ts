import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default abstract class CreditNote {
    @PrimaryGeneratedColumn('uuid')
    id!: string
}
