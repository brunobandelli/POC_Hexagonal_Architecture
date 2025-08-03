// import PseudoCrypto from '../../../adapters/PseudoCrypto';
import RealCrypto from '../../../adapters/RealCrypto';
import UserCollectionMemory from '../../../adapters/UserCollectionMemory';
import UserLogin from '../service/UserLogin';
import UserRegister from '../service/UserRegister';

export default class App {
    private cryptoProvider = new RealCrypto();
    private userCollection = new UserCollectionMemory()

  async run() {
    await this.registerUser();
    await this.loginUser();
  }

  private async registerUser() {
    const register = new UserRegister(this.userCollection,this.cryptoProvider);

    await register.execute({
      name: "Fulano",
      email: "fulano@email.com",
      password: "123456",
    });

    console.log("✅ Usuário registrado com sucesso");
  }

  private async loginUser() {
    const login = new UserLogin(this.userCollection,this.cryptoProvider);

    const user = await login.execute({
      email: "fulano@email.com",
      password: "123456",
    });

    if (user) {
      console.log("✅ Login efetuado com sucesso:", user);
    } else {
      console.log("❌ Falha no login");
    }
  }
}
