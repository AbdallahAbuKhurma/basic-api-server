'use srtict';

const express = require('express');
const router = express.Router();
const validator = require('../middlewares/clothes.validator');
const ClothesData = require('../models/clothes');
const clothesData = new ClothesData;

const getClothesData = (req, res) => {
  const responseObj = clothesData.read(req.params.id);
  res.json(responseObj);
};

const createClothesData = (req, res) => {
  const responseObj = clothesData.create(req.body);
  res.json(responseObj);
};

const updataClpthesData = (req, res) => {
  const responseObj = clothesData.update(req.params.id, req.body);
  res.json(responseObj);
};

const deleteClothesData = (req, res) => {
  const responseObj = clothesData.delete(req.params.id);
  res.json(responseObj);
};

router.get('/', getClothesData);

router.get('/:id', getClothesData);

router.post('/',validator ,createClothesData);

router.put('/:id',validator ,updataClpthesData);

router.delete('/:id' , deleteClothesData);

module.exports = router;
