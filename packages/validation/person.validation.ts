import { z } from 'zod'

import Enum from '../enums'

import addressSchema from './address.validation'
import phoneNumberSchema from './phone-number.validation'

const personSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    private_email: z.string().email(),
    address: addressSchema,
    private_phone_number: phoneNumberSchema,
    gender: z.nativeEnum(Enum.GENDER),
    birth_date: z.coerce.date()
}) satisfies z.ZodType<Entity.Person.Create>

export default personSchema
