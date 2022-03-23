import supertest from 'supertest';
import app from '..';

it('should return status code 200 OK', async () => {
  const respond = await supertest(app).get('/');
  expect(respond.status).toBe(200);
});
