import bcrypt from 'bcrypt'
import CryptoProvider from '../core/user/model/CryptoProvider';

export default class RealCrypto implements CryptoProvider{
    encrypt(password: string): Promise<string> {
        return bcrypt.hash(password, 10)
    }
    compare(password: string, cryptoPassword: string): Promise<boolean> {
        return bcrypt.compare(password, cryptoPassword)
    }
}