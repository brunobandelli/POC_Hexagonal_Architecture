import App from './core/user/app/app';

const app = new App();

app.run().catch(err => {
  console.error("Erro ao executar app:", err);
});
