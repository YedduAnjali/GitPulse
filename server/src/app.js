import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import githubRoutes from './routes/githubRoutes.js';
import { apiLimiter } from './middleware/rateLimiter.js';
import { errorHandler } from './middleware/errorHandler.js';
const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.get('/api/health', (req, res) => {
res.json({
success: true,
message: 'GitPulse API is running',
timestamp: new Date().toISOString(),
});
});
app.use('/api', apiLimiter);
app.use('/api/github', githubRoutes);
app.use(errorHandler);
export default app;