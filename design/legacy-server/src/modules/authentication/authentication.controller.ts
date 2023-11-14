import { Controller, Post } from '@nestjs/common'

@Controller('/authentication')
export default class AuthenticationController {
    @Post('/signin')
    async signin() {
        return 'signin'
    }

    @Post('/signup')
    async signup() {
        return 'signup'
    }
}
