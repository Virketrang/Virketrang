import { CUSTOMER_TYPE } from '@/enums'

interface Customer extends Workspace.Entity.BaseEntity {
    type: CUSTOMER_TYPE
    orders: Workspace.Entity.Order[]
}

declare namespace Customer {
    type Create = Omit<Customer, 'id'>

    type Update = Partial<Create>
}

export default Customer
