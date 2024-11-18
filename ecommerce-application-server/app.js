import express from 'express';
import userRouters from './routes/userRoutes.js';
import morgan from 'morgan';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
const app = express();
app.use(express.json());
app.use(cors({  origin: 'http://localhost:5173', // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control']}))
app.use(morgan('dev'));
app.use('/api/v1/auth', userRouters);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/order', orderRoutes);

export default app;