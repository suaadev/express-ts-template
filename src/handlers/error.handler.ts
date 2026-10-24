import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { logger } from '../configs/logger.js';
import { unsuccessfulResponseFormat } from '../configs/response.format.js';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof ZodError) {
    res
      .status(400)
      .json(
        unsuccessfulResponseFormat(
          'Validation error',
          'VALIDATION_ERROR',
          err.issues
        )
      );
    return;
  }

  logger.error(err);
  res.status(500).json(unsuccessfulResponseFormat('Internal Server Error'));
};
