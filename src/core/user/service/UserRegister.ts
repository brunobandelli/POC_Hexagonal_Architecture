import UseCase from '../../shared/UseCase';
import CryptoProvider from '../model/CryptoProvider';
import User from '../model/User';
import UserCollection from '../model/UserCollection';

export default class UserRegister implements UseCase<Required<User>,void>{

    constructor(
        private userCollection: UserCollection,
        private cryptoProvider: CryptoProvider,
    ){}

    async execute(user: Required<User>): Promise<void> {

        const passwordPseudoCrypto = await this.cryptoProvider.encrypt(user.password)
        const cryptoUser = {...user, password: passwordPseudoCrypto }

        await this.userCollection.add(cryptoUser)
    }
    
}