import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes';
import aboutRouter from './routes/aboutRoutes';
import logger from './utils/logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Adjust to your frontend URL
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/auth', authRoutes);
app.use('/api/about', aboutRouter);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://root:example@localhost:27017/mynewdatabase?authSource=admin';

mongoose.connect(MONGO_URI)
  .then(() => {
    logger.info(' Connected to MongoDB');
    app.listen(PORT, () => {
      logger.info(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    logger.error(' MongoDB connection error:', err.message);
    process.exit(1); // Optional: exit the app if DB connection fails
  });
