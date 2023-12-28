import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import productsRoutes from './routes/productRoutes.js';
dotenv.config();
const port = process.env.PORT;

connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send('App is running...!');
});

app.use('/api/products', productsRoutes);


// Error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})