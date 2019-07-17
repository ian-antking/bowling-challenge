const Scorecard = require('../src/scorecard');

describe('scorecard', () => {
  let scorecard;
  beforeEach(() => {
    scorecard = new Scorecard();
  });
  describe('constructor', () => {
    it('returns an object', () => {
      expect(scorecard).toBeInstanceOf(Object);
    });
  });
});
