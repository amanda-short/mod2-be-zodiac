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
      // horoscope: 'coming soon...',
    };
    expect(res.body).toEqual(aquarius);
  });
});  
