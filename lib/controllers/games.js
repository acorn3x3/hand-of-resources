const { Router } = require('express');
const { Game } = require('../models/Game');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const game = await Game.getById(req.params.id);
      if (!game) next();
      res.json(game);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const game = await Game.getAll();
      res.json(game);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const game = await Game.insert(req.body);
      res.json(game);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const data = await Game.updateById(req.params.id, req.body);
      if (!data) next();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const game = await Game.delete(req.params.id);
      if (!game) next();
      res.status(204);
      res.send();
    } catch (e) {
      next(e);
    }
  });
