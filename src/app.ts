import express from 'express';
import { OrderRouter, ProductRouter, UserRouter } from './router';

const app = express();

app.use(express.json());
app.use('/products', ProductRouter);
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);

export default app;
