const calculScore = require('../bowling');

let result;
// eslint-disable-next-line no-unused-vars
let scores;

// eslint-disable-next-line no-undef
describe('Score bowling', () => {
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
  it('undefined scores', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores();
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(undefined);
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
