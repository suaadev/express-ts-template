import { describe, expect, it } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('API test health endpoint', () => {
  it('GET /api/health returns 200 with server status', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      success: true,
      message: 'Server up'
    });
    expect(response.body.data).toHaveProperty('uptime');
  });
});
