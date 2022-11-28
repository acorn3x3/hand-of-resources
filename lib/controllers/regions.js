const { Router } = require('express');
const { Region } = require('../models/Region');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const region = await Region.getAll();
    res.json(region);
  } catch (e) {
    next(e);
  }
});

// .get('/:id', async (req, res, next) => {
//   try {
//     const region = await Region.getById(req.params.id);
//     if (!region) next();
//     res.json(region);
//   } catch (e) {
//     next(e);
//   }
// });
