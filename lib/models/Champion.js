const pool = require('../utils/pool');

class Champion {
  id;
  name;
  role;
  lane;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.role = row.role;
    this.lane = row.lane;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * FROM champions;
    `);
    return rows.map((row) => new Champion(row));
  }
  static async getById(id) {
    const { rows } = await pool.query(
      ` SELECT * FROM champions
          WHERE id = $1
          `,
      [id]
    );
    return new Champion(rows[0]);
  }
  static async insert({ name, role, lane }) {
    const { rows } = await pool.query(
      ` INSERT INTO champions (name, role, lane)
        VALUES ($1, $2, $3)
        RETURNING * `,
      [name, role, lane]
    );
    return new Champion(rows[0]);
  }
}

module.exports = { Champion };
