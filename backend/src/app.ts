import express from 'express';
import handleError from './errors/handleError';
import userRoutes from './routes/user.routes';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

app.use(handleError);

export default app;
