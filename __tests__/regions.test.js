const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('region routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /regions should return a list of regions', async () => {
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
  afterAll(() => {
    pool.end();
  });
});
