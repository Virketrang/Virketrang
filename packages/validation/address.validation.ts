import { z } from 'zod'

const addressSchema = z.object({
    street_name: z.string(),
    street_number: z.string(),
    floor: z.string().optional(),
    apartment: z.string().optional(),
    postal_code: z.number(),
    city: z.string(),
    country: z.string()
}) satisfies z.ZodType<Entity.Address.Create>

export default addressSchema
