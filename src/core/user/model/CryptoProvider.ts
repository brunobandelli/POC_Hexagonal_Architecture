export default interface CryptoProvider{
    encrypt(password: string): Promise<string>
    compare(password: string, cryptoPassword: string): Promise<boolean>
}