import app from './app';
import AppDataSource from './data-source';

(async () => {
  await AppDataSource.initialize()
    .then(() => console.log('Database Connected'))
    .catch((err) =>
      console.error('Error During Data Source Initialization ❌', err),
    );

  const PORT = process.env.APIPORT || 3333;
  app.listen(PORT, () => console.log(`Server Running on Port ${PORT} ✅`));
})();
