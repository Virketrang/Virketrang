import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default abstract class Invoice {
    @PrimaryGeneratedColumn('uuid')
    id!: string
}
