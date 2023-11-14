import { Injectable } from '@nestjs/common'

import UserRepository from './user.repository'

@Injectable()
export default class UserService {
    constructor(private readonly userRepository: UserRepository) {}
    async createUser(createUser: Workspace.Entity.User.Create): Promise<Workspace.Entity.User> {
        return await this.userRepository.save({ ...createUser, owner: false })
    }

    async createOwner(createOwner: Workspace.Entity.User.Create): Promise<Workspace.Entity.User> {
        return await this.userRepository.save({ ...createOwner, owner: true })
    }

    async createOwners(createOwners: Workspace.Entity.User.Create[]): Promise<Workspace.Entity.User[]> {
        return await Promise.all(createOwners.map((createOwner) => this.createOwner(createOwner)))
    }

    async getUsers(): Promise<Workspace.Entity.User[]> {
        return await this.userRepository.find()
    }

    async getUser(id: string): Promise<Workspace.Entity.User> {
        return await this.userRepository.getById(id)
    }

    async deleteUser(id: string): Promise<void> {
        await this.userRepository.delete(id)
    }
}
