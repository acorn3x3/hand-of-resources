const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('games routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /games should return a list of games', async () => {
    const resp = await request(app).get('/games');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "genre": "MOBA 1",
          "id": "1",
          "name": "League Of Legends 1",
          "numplayers": "10",
        },
        Object {
          "genre": "MOBA 2",
          "id": "2",
          "name": "League Of Legends 2",
          "numplayers": "10",
        },
        Object {
          "genre": "MOBA 3",
          "id": "3",
          "name": "League Of Legends 3",
          "numplayers": "10",
        },
        Object {
          "genre": "MOBA 4",
          "id": "4",
          "name": "League Of Legends 4",
          "numplayers": "10",
        },
        Object {
          "genre": "MOBA 5",
          "id": "5",
          "name": "League Of Legends 5",
          "numplayers": "10",
        },
      ]
    `);
  });
  afterAll(() => {
    pool.end();
  });
});
