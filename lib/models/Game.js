const pool = require('../utils/pool');

class Game {
  id;
  name;
  genre;
  numplayers;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.genre = row.genre;
    this.numplayers = row.numplayers;
  }

  static async getAll() {
    const { rows } = await pool.query(`
        SELECT * FROM games;
        `);

    return rows.map((row) => new Game(row));
  }
  static async getById(id) {
    const { rows } = await pool.query(
      ` SELECT * FROM games
        WHERE id = $1
        `,
      [id]
    );
    return new Game(rows[0]);
  }
}

module.exports = { Game };
