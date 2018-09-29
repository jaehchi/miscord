require('dotenv').config();

import request from 'supertest';
import { app, server } from '../../../';

afterEach(done => {
  server.close();
  done();
});

describe('Creating an user', () => {

  test('it should expect 400 if no email is supplied', async () => {
    const payload = {
      username: 'testuser',
      password: 'password'
    }

    await request(app.listen(1234))
    .post('/api/auth/signup')
    .send(payload)
    .expect(400);
  });

  test('it should expect 400 if no username is supplied', async () => {
    const payload = {
      email: 'test@test.com',
      password: 'password'
    }

    await request(app.listen(1235))
      .post('/api/auth/signup')
      .send(payload)
      .expect(400);
  });

  test('it should expect 400 if no password is supplied', async () => {
    const payload = {
      username: 'testuser',
      email: 'test@test.com',
    }

    await request(app.listen(1236))
      .post('/api/auth/signup')
      .send(payload)
      .expect(400);
  });

  test('it should hit endpoint & create a user', async () => {
    const payload = {
      username: 'testuser',
      email: 'test@test.com',
      password: 'password'
    }
    await request(app.listen(1237))
    .post('/api/auth/signup')
    .send(payload)
    .expect(200);
  });

});
