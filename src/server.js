//src/server.js

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import helmet from 'helmet';
import { errors } from 'celebrate';
import cookieParser from 'cookie-parser';
import { connectMongoDB } from './db/connectMongoDB.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { logger } from './middleware/logger.js';
import notsRoutes from './routes/notesRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(helmet());
app.use(logger);
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(notsRoutes);
app.use(authRoutes);

// Middleware для обробки неіснуючих маршрутів
app.use(notFoundHandler);

// Middleware для обробки помилок валідації
app.use(errors());

// Middleware для обробки помилок
app.use(errorHandler);

// підключення до MongoDB
await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
