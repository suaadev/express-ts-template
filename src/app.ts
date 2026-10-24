import Express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { rateLimit } from 'express-rate-limit';
import { pinoHttp } from 'pino-http';
import { CONFIG_CORS, GENERAL_RATE_LIMIT_CONFIG } from './configs/configs.js';
import { logger } from './configs/logger.js';
import appRoute from './app/app.route.js';
import healthRoute from './app/health.route.js';
import { notFoundHandler } from './handlers/not-found.handler.js';
import { errorHandler } from './handlers/error.handler.js';

const app = Express();

const limiter = rateLimit(GENERAL_RATE_LIMIT_CONFIG);

app.use(pinoHttp({ logger }));
app.use(helmet());
app.use(compression());
app.use(cors(CONFIG_CORS));
app.use(limiter);
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.use('/api', appRoute);
app.use('/api', healthRoute);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
