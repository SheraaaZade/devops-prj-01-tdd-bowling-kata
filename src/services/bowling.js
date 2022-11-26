module.exports = function calculScore(rolls) {
  let score = 0;
  let positionIndex = 0;

  if (rolls === undefined) return undefined;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] < 0 || rolls[i] > 10 || rolls[i] === undefined) return undefined;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    // eslint-disable-next-line no-use-before-define
    if (isStrike(rolls, positionIndex)) {
      // stike
      // eslint-disable-next-line no-use-before-define
      score += markStrike(rolls, positionIndex);
      // eslint-disable-next-line no-plusplus
      positionIndex++;
      // eslint-disable-next-line no-continue
      continue;
    }

    // eslint-disable-next-line no-use-before-define
    const rollScore = sum(rolls, positionIndex);

    // eslint-disable-next-line no-use-before-define
    if (isSpare(rolls, positionIndex)) {
      // spare
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

function sum(rolls, positionIndex) {
  return rolls[positionIndex] + rolls[positionIndex + 1];
}

function markStrike(rolls, positionIndex) {
  return 10 + rolls[positionIndex + 1] + rolls[positionIndex + 2];
}

function markSpare(rolls, positionIndex) {
  return 10 + rolls[positionIndex + 2];
}

function isStrike(rolls, positionIndex) {
  return rolls[positionIndex] === 10;
}

function isSpare(rolls, positionIndex) {
  return rolls[positionIndex] + rolls[positionIndex + 1] === 10;
}
