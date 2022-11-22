module.exports = function calculScore(rolls) {
  let score = 0;
  let positionIndex = 0;
  if (rolls === undefined) return undefined;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    const rollOne = rolls[positionIndex];
    if (rollOne === 10) {
      score += 10 + rolls[positionIndex + 1] + rolls[positionIndex + 2];
      // eslint-disable-next-line no-plusplus
      positionIndex++;
    } else {
      // spare
      const secondRoll = rolls[positionIndex + 1];
      score += rollOne + secondRoll;
      if (rollOne + secondRoll === 10) {
        score += rolls[positionIndex + 2];
      }
      positionIndex += 2;
    }
  }
  return score;
};
