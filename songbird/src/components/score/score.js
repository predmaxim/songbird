let stagePoints = 5;
let pointsSum = 0;
let allPoints = 30;

const score = document.querySelector('.score-field')

const setScore = () => {
  score.textContent = pointsSum;
};

const countScore = (wrongAnswers) => {
  let points = stagePoints - wrongAnswers;

  pointsSum += points
  allPoints -= wrongAnswers;

};

const getFinalScore = () => {
  return allPoints;
}

const clearScore = () => {
  stagePoints = 5;
  pointsSum = 0;
  allPoints = 30;
  score.textContent = 0;
}

export { setScore, countScore, getFinalScore, clearScore };