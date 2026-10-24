import { CorsOptions } from 'cors';
import { Options as RateLimitOptions } from 'express-rate-limit';

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
  : ['http://localhost:3000'];

export const CONFIG_CORS: CorsOptions = {
  origin: allowedOrigins,
  credentials: true
};

export const SERVER_CONFIG = {
  port: Number(process.env.PORT) || 8080
};

export const GENERAL_RATE_LIMIT_CONFIG: Partial<RateLimitOptions> = {
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false
};
