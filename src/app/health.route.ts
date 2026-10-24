import { Request, Response, Router } from 'express';
import { successResponseFormat } from '../configs/response.format.js';

const healthRoute = Router();

healthRoute.get('/health', (_req: Request, res: Response) => {
  const payload = {
    uptime: process.uptime()
  };
  res.json(successResponseFormat('Server up', payload));
});

export default healthRoute;
