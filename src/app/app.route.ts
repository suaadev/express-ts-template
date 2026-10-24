import { Request, Response, Router } from 'express';
import { z } from 'zod';
import { successResponseFormat } from '../configs/response.format.js';

const appRoute = Router();

const helloSchema = z.object({
  name: z.string().min(1)
});

appRoute.get('/app', (_req: Request, res: Response) => {
  res.json(successResponseFormat('HelloWorld!'));
});

appRoute.post('/app', (req: Request, res: Response) => {
  const body = helloSchema.parse(req.body);
  res.status(201).json(successResponseFormat(`Hello, ${body.name}!`));
});

export default appRoute;
