interface Payslip extends Entity.BaseEntity {
    user: Entity.User

    gross_pay: number
}

declare namespace Payslip {
    type Create = Omit<Payslip, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Payslip
