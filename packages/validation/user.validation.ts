import { z } from 'zod'

import personSchema from './person.validation'
import bankAccountSchema from './bank-account.validation'

const userSchema = personSchema.extend({
    username: z.string(),
    password: z.string(),
    bank_account: bankAccountSchema,
    employee_number: z.number(),
    active: z.boolean(),
    owner: z.boolean(),
    production_unit_id: z.string()
}) satisfies z.ZodType<Entity.User.Create>

export default userSchema
