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
    givenScores(Array(20).fill(1));
    // eslint-disable-next-line no-use-before-define
    whenBowling(scores);
    // eslint-disable-next-line no-use-before-define
    thenResultIs(20);
  });

    // eslint-disable-next-line no-undef
    it('handles a spare with the appropriate bonus', () => {
      givenScores([5, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      // eslint-disable-next-line no-use-before-define
      whenBowling(scores);
      // eslint-disable-next-line no-use-before-define
      thenResultIs(16);
    });

    // eslint-disable-next-line no-undef
    it('handles a strike with the appropriate bonus', () => {
      givenScores([0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      // eslint-disable-next-line no-use-before-define
      whenBowling(scores);
      // eslint-disable-next-line no-use-before-define
      thenResultIs(26);
    });

     // eslint-disable-next-line no-undef
     it('result should be 300 as there are only strikes', () => {
      givenScores(Array(12).fill(10));
      // eslint-disable-next-line no-use-before-define
      whenBowling(scores);
      // eslint-disable-next-line no-use-before-define
      thenResultIs(300);
    });

     // eslint-disable-next-line no-undef
     it('result of strik in last round', () => {
      givenScores([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0]);
      // eslint-disable-next-line no-use-before-define
      whenBowling(scores);
      // eslint-disable-next-line no-use-before-define
      thenResultIs(10);
    });

      // eslint-disable-next-line no-undef
      it('result of spare in last round', () => {
        givenScores([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0]);
        // eslint-disable-next-line no-use-before-define
        whenBowling(scores);
        // eslint-disable-next-line no-use-before-define
        thenResultIs(10);
      });

       
         // eslint-disable-next-line no-undef
          it('plus de 10 revoie un fall', () => {
            givenScores([0, 15, 0, 11, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            // eslint-disable-next-line no-use-before-define
            whenBowling(scores);
            // eslint-disable-next-line no-use-before-define
            thenResultIs(34);
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
