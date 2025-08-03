import UseCase from '../../shared/UseCase';
// import ReversePseudoCrypto from '../../temp/ReversePseudoCrypto';
import UserCollection from '../../../adapters/UserCollectionMemory';
import CryptoProvider from '../model/CryptoProvider';
import User from '../model/User';

export type UserLoginInput = {
    email: string,
    password: string,
}

export default class UserLogin implements UseCase<UserLoginInput, User | null> {

    constructor(
        private userCollection: UserCollection,
        private cryptoProvider: CryptoProvider
    ){}

    async execute(input: UserLoginInput): Promise<User | null> {
        const user = await this.userCollection.findByEmail(input.email)
        if(!user) return null

        const equal = await this.cryptoProvider.compare(input.password, user.password!)
        if(!equal) return null

        return {
            name: user.name,
            email: user.email,
        }

    }

}