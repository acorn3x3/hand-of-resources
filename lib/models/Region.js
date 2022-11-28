const pool = require('../utils/pool');

class Region {
  id;
  name;
  biome;
  location;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.biome = row.biome;
    this.location = row.location;
  }
  static async getAll() {
    const { rows } = await pool.query(`
        SELECT * FROM regions;
        `);

    return rows.map((row) => new Region(row));
  }
}
module.exports = { Region };
