import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import order from './routes/orderroute.js'
import products from './routes/product.routes.js'
import cartroute from './routes/cartroute.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const URI="mongodb+srv://Shemaiah19:123@cluster0.a8q8q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



mongoose.connect(URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));


// Test route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.use('/order',order);
app.use('/products',products)
app.use('/cart',cartroute)

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
