import { z } from 'zod'

const phoneNumberSchema = z.object({
    country_code: z.number(),
    subscriber_number: z.number()
}) satisfies z.ZodType<Entity.PhoneNumber.Create>

export default phoneNumberSchema
