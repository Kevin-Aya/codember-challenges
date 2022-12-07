const { getZebrasCount } = require('./index.js');

describe('Challenge 03: Colors', () => {
  it('Test return typeof', () => {
    const result = getZebrasCount([]);

    const expected = {
      maxCount: expect.any(Number),
      maxColor: expect.any(String),
    };
    expect(result).toMatchObject(expected);
  });
});
