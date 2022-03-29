import express from 'express';
import { ProductRouter, UserRouter } from './router';

const app = express();

app.use(express.json());
app.use('/products', ProductRouter);
app.use('/users', UserRouter);

export default app;
