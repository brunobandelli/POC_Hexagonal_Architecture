import App from './app/App';

const app = new App();

app.run().catch(err => {
  console.error("Erro ao executar app:", err);
});
