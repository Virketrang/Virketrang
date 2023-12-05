import UserSchema from '../user'

const SignupSchema = z.object({
    invite_code: z.string(),
    user: UserSchema.create
}) satisfies z.ZodType<Entity.Signup>

export default SignupSchema
