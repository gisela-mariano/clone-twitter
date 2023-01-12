import express from 'express';
import handleError from './errors/handleError';
import userRoutes, { authRoutes } from './routes/user.routes';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/login', authRoutes);

app.use(handleError);

export default app;
