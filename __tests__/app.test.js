const request = require('supertest');
const app = require('../lib/app.js');

const { zodiacs } = require('../lib/zodiac-data.js');

describe('zodiac routes', () => {
  it('/zodiac should return a list of zodiacs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiac/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });

  it('/horoscope/:sign should return horoscope url', async () => {
    const res = await request(app).get('/horoscopes/aquarius');
    const aquarius = {
      sign: 'aquarius',
      horoscope: 'https://www.laughsend.com/horoscopes/aquarius.php',
    };
    expect(res.body).toEqual(aquarius);
  });
});  
