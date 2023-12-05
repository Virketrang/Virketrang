const CreateBankAccountSchema = z.object({
    registration_number: z.coerce.number(),
    account_number: z.coerce.number(),
    swift_code: z.string().optional(),
    iban: z.string().optional()
}) satisfies z.ZodType<Entity.BankAccount.Create>

export default abstract class BankAccountSchema {
    public static create = CreateBankAccountSchema
}
