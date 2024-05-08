import UserValidation from '../../users/users/user.validation'

const SigninSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

const SignupSchema = z.object({
    invite_code: z.string(),
    user: UserValidation.create
}) satisfies z.ZodType<Entity.Signup>

export default abstract class AuthenticationValidation {
    public static signin = SigninSchema
    public static signup = SignupSchema
}
