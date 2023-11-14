import { z } from 'zod'

import addressSchema from './address.validation'

const productionUnitSchema = z.object({
    unit_number: z.number(),
    address: addressSchema
}) satisfies z.ZodType<Entity.ProductionUnit.Create>

export default productionUnitSchema
