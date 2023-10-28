interface Person extends Workspace.Entity.BaseEntity {
    firstname: string
    lastname: string
    name: string
    email: string
    address: Workspace.Entity.Address
    phone: Workspace.Entity.PhoneNumber
}

export default Person
