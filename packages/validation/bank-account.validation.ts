import { z } from 'zod'

const bankAccountSchema = z.object({
    registration_number: z.number(),
    account_number: z.number(),
    swift: z.string().optional(),
    iban: z.string().optional()
}) satisfies z.ZodType<Entity.BankAccount.Create>

export default bankAccountSchema
