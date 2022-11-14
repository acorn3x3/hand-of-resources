const { Router } = require('express');
const { Game } = require('../models/Game');

module.exports = Router().get('/', async (req, res, next) => {
  console.log('just a test for making sure its hittin dat');
  try {
    const data = await Game.getAll();
    console.log(data);
    res.json(data);
  } catch (e) {
    next(e);
  }
});
