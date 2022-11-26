module.exports = function calculScore(rolls) {
  let score = 0;
  let positionIndex = 0;

  if (rolls === undefined) return undefined;

  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] < 0 || rolls[i] > 10 || rolls[i] === undefined) return undefined;
  }

  for (let i = 0; i < 10; i++) {

    if(isStrike(rolls, positionIndex)) { //stike
      score += markStrike(rolls, positionIndex);
      positionIndex++;
      continue;
    }
    
    let rollScore = sum(rolls, positionIndex);

    if(isSpare(rolls, positionIndex)){ //spare
      score +=markSpare(rolls, positionIndex);    
    }else{ //not spare, not strike
      score += rollScore;
    }

    positionIndex += 2;
  }
  return score;
};



function sum(rolls, positionIndex){
  return rolls[positionIndex] + rolls[positionIndex+1];
}

 function markStrike(rolls, positionIndex){
  return 10+rolls[positionIndex+1]+rolls[positionIndex+2];
}

function markSpare(rolls, positionIndex){
  return 10 + rolls[positionIndex+2];
}

function isStrike(rolls, positionIndex) {
  return rolls[positionIndex]===10;
};

function isSpare(rolls, positionIndex){
  return rolls[positionIndex]+rolls[positionIndex+1]===10;
}