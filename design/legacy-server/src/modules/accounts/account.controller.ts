import { Controller, Delete, Get, HttpCode, Patch, Post } from '@nestjs/common'

@Controller('accounts')
export default class AccountController {
    @Get()
    @HttpCode(200)
    async getAccounts() {
        return 'Hello World!'
    }

    @Get(':id')
    @HttpCode(200)
    async getAccount() {
        return 'Hello World!'
    }

    @Post()
    @HttpCode(201)
    async createAccount() {
        return 'Hello World!'
    }

    @Patch(':id')
    @HttpCode(200)
    async updateAccount() {
        return 'Hello World!'
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteAccount() {
        return 'Hello World!'
    }
}
