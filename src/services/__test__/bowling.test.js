const calculScore = require('../bowling');

let result;
let scores;

// eslint-disable-next-line no-undef
describe('Bowling test', () => {
  function givenScores(customScores) {
    scores = customScores;
  }

  function whenBowling(customScores) {
    result = calculScore(customScores);
  }

  function thenResultIs(expectedResult) {
    // eslint-disable-next-line no-undef
    expect(result).toEqual(expectedResult);
  }
  // eslint-disable-next-line no-undef
  it('should fail if the result is not 0 since all of the values equal 0', () => {
    givenScores([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    whenBowling(scores);
    thenResultIs(0);
  });

  // eslint-disable-next-line no-undef
  it('should fail as the scores have not been provided', () => {
    givenScores();
    whenBowling(scores);
    thenResultIs(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should fail as there are negative values in the scores', () => {
    givenScores([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 0, 0, 0, 0, 0, 0, 0, 0]);
    whenBowling(scores);
    thenResultIs(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should return 20 as each value is equal to one', () => {
    givenScores(Array(20).fill(1));
    whenBowling(scores);
    thenResultIs(20);
  });

  // eslint-disable-next-line no-undef
  it('handles a spare with the appropriate bonus', () => {
    givenScores([5, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    whenBowling(scores);
    thenResultIs(16);
  });

  // eslint-disable-next-line no-undef
  it('handles a strike with the appropriate bonus', () => {
    givenScores([0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    whenBowling(scores);
    thenResultIs(26);
  });

  // eslint-disable-next-line no-undef
  it('result should be 300 as there are only strikes', () => {
    givenScores(Array(12).fill(10));
    whenBowling(scores);
    thenResultIs(300);
  });

  // eslint-disable-next-line no-undef
  it('should make a functional strike in the last round', () => {
    givenScores([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 4, 7]);
    whenBowling(scores);
    thenResultIs(21);
  });

  // eslint-disable-next-line no-undef
  it('should have a functional spare in the last round', () => {
    givenScores([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 8]);
    whenBowling(scores);
    thenResultIs(18);
  });

  // eslint-disable-next-line no-undef
  it('should fail as incorrect values have been entered', () => {
    givenScores([0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    whenBowling(scores);
    thenResultIs(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should fail as positionIndex is out of bound', () => {
    givenScores(Array(12).fill(5));
    whenBowling(scores);
    thenResultIs(undefined);
  });
});
