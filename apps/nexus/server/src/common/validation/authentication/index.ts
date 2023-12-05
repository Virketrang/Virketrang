import SigninSchema from './signin.schema'
import SignupSchema from './signup.schema'

export default abstract class AuthenticationSchema {
    public static signin = SigninSchema
    public static signup = SignupSchema
}
