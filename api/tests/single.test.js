const request = require("supertest");
var app = require('../app');

describe("Test all routes", () => {
  test('responds to / with 401 without authorization', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(401);
  });

  test('responds to / with 200 with authorization', async () => {
    const res = await request(app).get('/').set('Authorization', 'Bearer mysecrettoken');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('OK');
  });

  test('responds to /time with current time', async () => {
    const res = await request(app).get('/time').set('Authorization', 'Bearer mysecrettoken');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
  });

  test('responds to /metrics with data', async () => {
    const res = await request(app).get('/metrics').set('Authorization', 'Bearer mysecrettoken');
    expect(res.header['content-type']).toBe('text/plain; version=0.0.4; charset=utf-8');
    expect(res.statusCode).toBe(200);
  });

  test('responds to /random page with error page', async () => {
    const res = await request(app).get('/random').set('Authorization', 'Bearer mysecrettoken');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(404);
  });
});