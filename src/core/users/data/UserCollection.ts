import User from '../../user/model/User'

// node-lint-ignore require-await
export default class UserCollection {
    static readonly users: User[] = []

    async add(user: User): Promise<void>{
        UserCollection.users.push(user)
    }

    async findByEmail(email: string): Promise<User | null> {
        return UserCollection.users.find(user => user.email = email) ?? null
    }
}