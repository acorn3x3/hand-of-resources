const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('games routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('GET /games should return a list of games', async () => {
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

  it.skip('GET /games/:id should return an individual game', async () => {
    const resp = await request(app).get('/games/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
    Object {
      "genre": "MOBA 1",
      "id": "1",
      "name": "League Of Legends 1",
      "numplayers": "10",
    }
    `);
  });

  it.skip('POST /games should create a new game', async () => {
    const newGame = {
      name: 'League of Legends 6',
      genre: 'MOBA 6',
      numplayers: '11',
    };
    const resp = await request(app).post('/games').send(newGame);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newGame,
    });
  });
  it.skip('PUT /games/:id should update an existing game', async () => {
    const resp = await request(app).put('/games/1').send({
      numplayers: '12',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.numplayers).toBe('12');
  });

  it.skip('GET /games/xyz should return a 404', async () => {
    const resp = await request(app).get('/games/456');
    expect(resp.status).toBe(404);
  });

  it.skip('DELETE /games/1 should delete a game #1', async () => {
    const resp = await request(app).delete('/games/1');
    expect(resp.status).toBe(204);

    const getResp = await request(app).get('/games/1');
    expect(getResp.status).toBe(404);
  });

  afterAll(() => {
    pool.end();
  });
});
