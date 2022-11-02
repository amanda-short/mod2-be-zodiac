const { Router } = require('express');
const { horoscopes } = require('../public/horoscopes-data.js');

module.exports = Router()
  .get('/:sign', (req, res) => {
    let match;
    for (const horoscope of horoscopes) {
      if (horoscope.sign === req.params.sign) {
        match = { sign: horoscope.sign, horoscope: horoscope.horoscope };
      }
    }
    res.json(match);
  })
  .get('/', (req, res) => {
    const filteredData = [];
    for (const horoscope of horoscopes) {
      filteredData.push({ sign: horoscope.sign, horoscope: horoscope.horoscope });
    }
    res.json(filteredData);
    
  });
