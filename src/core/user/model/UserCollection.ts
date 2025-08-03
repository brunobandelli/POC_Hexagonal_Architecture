import User from './User'

export default interface UserCollection {
    add(user: User): Promise<void>
    findByEmail(email: string): Promise<User | null>
}