import { describe, expect, it } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('API Routes', () => {
  it('GET /api/app returns 200 with hello world message', async () => {
    const response = await request(app).get('/api/app');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      message: 'HelloWorld!'
    });
  });

  it('POST /api/app returns 201 with valid body', async () => {
    const response = await request(app)
      .post('/api/app')
      .send({ name: 'Antigravity' });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      success: true,
      message: 'Hello, Antigravity!'
    });
  });

  it('POST /api/app returns 400 with invalid body', async () => {
    const response = await request(app).post('/api/app').send({});

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      success: false,
      message: 'Validation error',
      error: 'VALIDATION_ERROR'
    });
    expect(response.body).toHaveProperty('data');
  });

  it('GET /api/unknown returns 404 for unhandled routes', async () => {
    const response = await request(app).get('/api/unknown');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      success: false,
      message: 'Not Found'
    });
  });
});
