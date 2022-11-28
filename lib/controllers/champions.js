const { Router } = require('express');
const { Champion } = require('../models/Champion');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const champion = await Champion.getAll();

    res.json(champion);
  } catch (e) {
    next(e);
  }
  // .get('/:id', async (req, res, next) => {
  //   try {
  //     const champion = await Champion.getById(req.params.id);
  //     if (!champion) next();
  //     res.json(champion);
  //   } catch (e) {
  //     next(e);
  //   }
});
