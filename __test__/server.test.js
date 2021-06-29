'use strict';

const {server} = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('API Server', () => {

  it('handles 404 bad route', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  
  it('handles 404 bad method', async () => {
    const response = await request.post('/');
    expect(response.status).toEqual(404);
  });
  //food test
  it('handles create a record using post /food', async () => {
    const req = {
      dishType: 'dish type',
      dishName: 'dish name',
      cookingTime: 'cooking time',
      cookingPrep: 'cooking prep',
    };
    const response = await request.post('/food').send(req);
    expect(response.status).toEqual(200);
  });

  it('handles reading a list of records /food', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
  });

  it('handles reading one record /food', async () => {
    const response = await request.get('/food/:id');
    expect(response.status).toEqual(200);
  });

  it('handles updating a record /food', async () => {
    const req = {
      dishType: 'dish type',
      dishName: 'dish name',
      cookingTime: 'cooking time',
      cookingPrep: 'cooking prep',
    };
    const response = await request.put('/food/:id').send(req);
    expect(response.status).toEqual(200);
  });

  it('handles deleting a record /food', async () => {
    const response = await request.delete('/food/:id');
    expect(response.status).toEqual(200);
  });

  //cookies test
  it('handles create a record using post /clothes', async () => {
    const req = {
      clothesType: 'clothes type',
      clothesBrand: 'clothes brand',
      clothesPrice: 'clothes price',
    };
    const response = await request.post('/clothes').send(req);
    expect(response.status).toEqual(200);
  });

  it('handles reading a list of records /clothes', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toEqual(200);
  });

  it('handles reading one record /clothes', async () => {
    const response = await request.get('/clothes/:id');
    expect(response.status).toEqual(200);
  });

  it('handles updating a record /clothes', async () => {
    const req = {
      clothesType: 'clothes type',
      clothesBrand: 'clothes brand',
      clothesPrice: 'clothes price',
    };
    const response = await request.put('/clothes/:id').send(req);
    expect(response.status).toEqual(200);
  });

  it('handles deleting a record /clothes', async () => {
    const response = await request.delete('/clothes/:id');
    expect(response.status).toEqual(200);
  });

});