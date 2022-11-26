module.exports = function calculScore(rolls) {
  let score = 0;
  let positionIndex = 0;
  if (rolls === undefined) return undefined;

// const tab = new Array(20);
  // console.log(tab);                                                     //je cherche à mettre une condition qui definie une taille max de la table et renvoyé undefind 
  // if( tab.length > 20) return undefined;                                // dans le cas où mon test va tenté d'agrandire la table( avec un strike ou un spare en fin de jeu),
                                                                          //  à la place d'avoir un failed dans les test on va tenté derenvoyer le resulta undefind .... mais je sais pas comment faire ça!!!!

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] < 0 || rolls[i] > 10) return undefined;
  }

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