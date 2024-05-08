const CreateMeasurementSchema = z.object({
    unit: z.string(),
    width: z.coerce.number().optional(),
    height: z.coerce.number().optional(),
    depth: z.coerce.number().optional()
}) satisfies z.ZodType<Entity.Measurement>

export default abstract class MeasurementValidation {
    public static create = CreateMeasurementSchema
}
