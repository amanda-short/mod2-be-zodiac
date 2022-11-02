const { Router } = require('express');
const { horoscopes } = require('../zodiac-data.js');

module.exports = Router()
  .get('/:name', (req, res) => {
    let match;
    for (const horoscope of horoscopes) {
      if (horoscopes.name === req.params.name) {
        match = horoscope;
      }
    }

    return res.json(match);
  })
  .get('/', (req, res) => {
    const filteredData = [];
    for (const horoscope of horoscopes) {
      filteredData.push({ name: horoscope.name, horoscope: horoscope.horoscope });
    }
    res.json(filteredData);
    
  });
