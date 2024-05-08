const CreateSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    gender: z.nativeEnum(Enum.GENDER),
    birthdate: z.coerce.date()
})

export default abstract class ProfileValidation {
    public static create = CreateSchema
}
