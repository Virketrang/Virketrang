interface Payslip extends Workspace.Entity.BaseEntity {
    user: Workspace.Entity.User

    grossPay: number
}

declare namespace Payslip {
    type Create = Omit<Payslip, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Payslip
