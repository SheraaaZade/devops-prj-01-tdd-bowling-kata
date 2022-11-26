/* eslint-disable no-trailing-spaces */
/* eslint-disable no-shadow */
module.exports = function calculScore(rolls) {
  let score = 0;
  let positionIndex = 0;

  if (rolls === undefined) return undefined;

  // eslint-disable-next-line no-shadow
  function sum(rolls, positionIndex) {
    return rolls[positionIndex] + rolls[positionIndex + 1];
  }

  // eslint-disable-next-line no-shadow
  function markStrike(rolls, positionIndex) {
    return 10 + rolls[positionIndex + 1] + rolls[positionIndex + 2];
  }

  // eslint-disable-next-line no-shadow
  function markSpare(rolls, positionIndex) {
    return 10 + rolls[positionIndex + 2];
  }

  // eslint-disable-next-line no-shadow
  function isStrike(rolls, positionIndex) {
    return rolls[positionIndex] === 10;
  }

  function isSpare(rolls, positionIndex) {
    return rolls[positionIndex] + rolls[positionIndex + 1] === 10;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] < 0 || rolls[i] > 10 || rolls[i] === undefined) return undefined;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10 && positionIndex < rolls.length; i++) {
    if (isStrike(rolls, positionIndex)) {
      // stike
      score += markStrike(rolls, positionIndex);
      // eslint-disable-next-line no-plusplus
      positionIndex++;
      // eslint-disable-next-line no-continue
      continue;
    }

    // eslint-disable-next-line no-use-before-define
    const rollScore = sum(rolls, positionIndex);

    if (isSpare(rolls, positionIndex)) {
      if (rolls[positionIndex + 2] === undefined) return undefined;
      // eslint-disable-next-line no-use-before-define
      score += markSpare(rolls, positionIndex);
    } else {
      // not spare, not strike
      score += rollScore;
    }

    positionIndex += 2;
  }
  return score;
};
