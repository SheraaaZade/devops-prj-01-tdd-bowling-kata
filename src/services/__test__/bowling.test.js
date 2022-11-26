const calculScore = require('../bowling');

let result;
// eslint-disable-next-line no-unused-vars
let scores;

// eslint-disable-next-line no-undef
describe('should return 0', () => {
  // eslint-disable-next-line no-undef
  it('should fail if the result is not 0 since all of the values equal 0', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(0);
  });

  // eslint-disable-next-line no-undef
  it('should fail as the scores have not been provided', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores();
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should fail as there are negative values in the scores', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 0, 0, 0, 0, 0, 0, 0, 0]);
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should return 20 as each value is equal to one', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores(Array(20).fill(1));
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(20);
  });

  // eslint-disable-next-line no-undef
  it('handles a spare with the appropriate bonus', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores([5, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(16);
  });

  // eslint-disable-next-line no-undef
  it('handles a strike with the appropriate bonus', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores([0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(26);
  });

  // eslint-disable-next-line no-undef
  it('result should be 300 as there are only strikes', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores(Array(12).fill(10));
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(300);
  });

  // eslint-disable-next-line no-undef
  it('should make a functional strike in the last round', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 4, 7]);
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(21);
  });

  // eslint-disable-next-line no-undef
  it('should have a functional spare in the last round', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 8]);
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(18);
  });

  // eslint-disable-next-line no-undef
  it('should fail as incorrect values have been entered', () => {
    // eslint-disable-next-line no-use-before-define
    givenScores([0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
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
