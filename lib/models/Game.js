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
    console.log('any string');
    const { rows } = await pool.query(`
        SELECT * FROM games;
        `);
    console.log(rows);
    return rows.map((row) => new Game(row));
  }
}

module.exports = { Game };
