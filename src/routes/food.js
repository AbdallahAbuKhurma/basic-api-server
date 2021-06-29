'use srtict';

const express = require('express');
const router = express.Router();
const validator = require('../middlewares/food.validator');
const FoodData = require('../models/food');
const foodData = new FoodData;

const getFoodData = (req, res) => {
  const responseObj = foodData.read(req.params.id);
  res.json(responseObj);
};

const createFoodData = (req, res) => {
  const responseObj = foodData.create(req.body);
  res.json(responseObj);
};

const updateFoodData = (req, res) => {
  const responseObj = foodData.update(req.params.id, req.body);
  res.json(responseObj);
};

const deleteFoodData = (req, res) => {
  const responseObj = foodData.delete(req.params.id);
  res.json(responseObj);
};

router.get('/', getFoodData);

router.get('/:id', getFoodData);

router.post('/',validator ,createFoodData);

router.put('/:id',validator ,updateFoodData);

router.delete('/:id' , deleteFoodData);

module.exports = router;
