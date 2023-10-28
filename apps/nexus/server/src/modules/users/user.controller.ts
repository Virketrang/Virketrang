import { Controller, Get, HttpCode } from '@nestjs/common'

@Controller('users')
export default class UserController {
    @Get('/')
    @HttpCode(200)
    async getUsers() {
        return 'Hello world'
    }
}
