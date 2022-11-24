const calculScore = require('../bowling');

let result;
// eslint-disable-next-line no-unused-vars
let scores;

// eslint-disable-next-line no-undef
describe('should return 0', () => {
  // eslint-disable-next-line no-undef
  it('balls -> 0', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(0);
  });

  // eslint-disable-next-line no-undef
  it('should failed as scores is not provided', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores();
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should failed as negative values in scores', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 0, 0, 0, 0, 0, 0, 0, 0]);
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should return 20 for game of all ones', () => {
    givenScores(Array(20).fill(1));
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(20);
  });

    // eslint-disable-next-line no-undef
    it('handles a spare with correct bonus', () => {
      givenScores([5, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      // eslint-disable-next-line no-use-before-define
      whenBowling(scores);
      // eslint-disable-next-line no-use-before-define
      thenResultIs(16);
    });

    // eslint-disable-next-line no-undef
    it('handles a strike with correct bonus', () => {
      givenScores([0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      // eslint-disable-next-line no-use-before-define
      whenBowling(scores);
      // eslint-disable-next-line no-use-before-define
      thenResultIs(26);
    });

     // eslint-disable-next-line no-undef
     it('all strikes, scores = 300', () => {
      givenScores(Array(12).fill(10));
      // eslint-disable-next-line no-use-before-define
      whenBowling(scores);
      // eslint-disable-next-line no-use-before-define
      thenResultIs(300);
    });


  function givenScores(customScores) {
    scores = customScores;
  }

  function whenBowling(_scores) {
    result = calculScore(_scores);
  }

  function thenResultIs(expectedResult) {
    // eslint-disable-next-line no-undef
    expect(result).toEqual(expectedResult);
  }
});
