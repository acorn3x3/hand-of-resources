const { Router } = require('express');
const { Champion } = require('../models/Champion');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const champion = await Champion.getAll();

      res.json(champion);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const champion = await Champion.getById(req.params.id);
      if (!champion) next();
      res.json(champion);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await Champion.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const champion = await Champion.updateById(req.params.id, req.body);
      if (!champion) next();
      res.json(champion);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Champion.delete(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
