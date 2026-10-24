import { Request, Response } from 'express';
import { unsuccessfulResponseFormat } from '../configs/response.format.js';

export const notFoundHandler = (_req: Request, res: Response) => {
  res.status(404).json(unsuccessfulResponseFormat('Not Found'));
};
