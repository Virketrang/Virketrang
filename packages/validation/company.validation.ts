import { z } from 'zod'

import Enum from '../enums'

import phoneNumberSchema from './phone-number.validation'
import addressSchema from './address.validation'
import bankAccountSchema from './bank-account.validation'
import userSchema from './user.validation'
import productionUnitSchema from './production-unit.validation'

const companySchema = z.object({
    company_name: z.string(),
    company_number: z.number(),
    accounting_class: z.nativeEnum(Enum.ACCOUNTING_CLASS),
    corporate_form: z.nativeEnum(Enum.CORPORATE_FORM),
    employer: z.boolean(),
    phone_number: phoneNumberSchema,
    address: addressSchema,
    bank_account: bankAccountSchema,
    users: z.array(userSchema),
    production_units: z.array(productionUnitSchema)
}) satisfies z.ZodType<Entity.Company.Create>

export default companySchema
