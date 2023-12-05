const CreateCategorySchema = z.object({
    unique_identifier: z.string(),
    parent_id: z.string().uuid().optional(),
    names: z.array(z.object({ value: z.string(), locale_id: z.string().uuid() })).optional()
}) satisfies z.ZodType<Entity.Category.Create>

export default abstract class CategoryValidation {
    public static readonly create = CreateCategorySchema
}
