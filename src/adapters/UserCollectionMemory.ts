import User from '../core/user/model/User';
import UserCollection from '../core/user/model/UserCollection';

export default class UserCollectionMemory implements UserCollection {
    static readonly users: User[] = []

    async add(user: User): Promise<void>{
        UserCollectionMemory.users.push(user)
    }

    async findByEmail(email: string): Promise<User | null> {
        return UserCollectionMemory.users.find(user => user.email = email) ?? null
    }
}