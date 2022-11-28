const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('champion routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('GET /champions should return a list of champions', async () => {
    const res = await request(app).get('/champions');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "lane": "Top",
          "name": "Aatrox",
          "role": "Fighter",
        },
        Object {
          "id": "2",
          "lane": "Jungle",
          "name": "Belveth",
          "role": "Split Pusher",
        },
        Object {
          "id": "3",
          "lane": "Bot",
          "name": "Caitlyn",
          "role": "Sniper",
        },
        Object {
          "id": "4",
          "lane": "Mid",
          "name": "Diana",
          "role": "Mage",
        },
        Object {
          "id": "5",
          "lane": "Support",
          "name": "Ekko",
          "role": "Assassin",
        },
      ]
    `);
  });
  it.skip('GET /champions/:id should return an individual champion', async () => {
    const res = await request(app).get('/champions/1');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "id": "1",
        "lane": "Top",
        "name": "Aatrox",
        "role": "Fighter",
      }
    `);
  });
  it.skip('POST /champions should create a new champion', async () => {
    const newChamp = {
      name: 'Shen',
      role: 'Bruiser',
      lane: 'Top',
    };
    const res = await request(app).post('/champions').send(newChamp);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newChamp,
    });
  });
  it.skip('PUT /champions/:id should update an existing champion', async () => {
    const res = await request(app).put('/champions/1').send({
      role: 'Drain Tank',
    });

    expect(res.status).toBe(200);
    expect(res.body.role).toBe('Drain Tank');
  });

  it('DELETE /champions/1 should delete a champion #1', async () => {
    const resp = await request(app).delete('/champions/1');
    expect(resp.status).toBe(200);

    const champResp = await request(app).get('/champions/1');
    expect(champResp.status).toBe(500);
  });

  afterAll(() => {
    pool.end();
  });
});
