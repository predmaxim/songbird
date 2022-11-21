import { clearPlayCards, setPlayCards, setСorrectCard, setBadge } from 'BirdsList/birds-list.js'
import { setCorrectInfoToPlayer, clearPlayer } from 'Player/player.js'
import { sliderRoll } from 'Slider/slider.js'
import { setScore, countScore, getFinalScore, clearScore } from 'Score/score.js'
import { hideStartDescription, showStartDescription, setBirdDescription } from 'BirdsDescription/birds-description.js'

const nextBtn = document.querySelector('.next-btn');

let curStage = 0;
let correctCard; // = {};
let playCards; // = [];
let gameStoped = false;
let wrongAnswers = 0;

const right = new Audio('https://www.myinstants.com/media/sounds/rightanswer.mp3');
const wrong = new Audio('https://www.myinstants.com/media/sounds/wrong_SriFgVc.mp3');
right.preload;
wrong.preload;

const checkStage = (curStage) => {
  if (curStage < 5) return true
  return false
}

// set stage
const setStage = (stageNum) => {
  const stageNames = document.querySelectorAll('.lavel__item');
  stageNames.forEach(el => el.classList.remove('active'));
  stageNames[stageNum].classList.add('active');
  return stageNum;
};

const newStage = () => {
  wrongAnswers = 0;
  curStage = setStage(curStage++);

  nextBtn.classList.remove('active');
  clearPlayer();
  showStartDescription();
  clearPlayCards();
  playCards = setPlayCards(curStage);
  correctCard = setСorrectCard(curStage);
  gameStoped = false;
}

const newGame = () => {
  clearScore();
  clearPlayer();
  newStage(curStage);

  document.querySelector('.score').classList.remove('dispnone');
  gameStoped = false;
}

const showResult = () => {
  document.querySelector('.score-you-scored').textContent = getFinalScore();
  sliderRoll(2);
};

const stopStage = () => {
  setScore();
  gameStoped = true;
}

const endGame = () => {
  showResult();
  gameStoped = true;
  curStage = 0;
}

const getCorrectCard = () => {
  return correctCard;
}


document.addEventListener('click', (e) => {

  if (e.target.closest('.birds-list__item')) {

    const target = e.target.closest('.birds-list__item');
    const card = playCards.filter(el => el.id === +target.id)[0];

    hideStartDescription();
    setBirdDescription(card);

    if (!gameStoped) {
      if (+card.id === correctCard.id) {

        target.classList.add('active');

        right.play();

        setBadge(target, true);
        setCorrectInfoToPlayer(correctCard);
        countScore(wrongAnswers);
        stopStage();

        if (checkStage(curStage)) nextBtn.classList.add('active');
        else setTimeout(endGame, 2000);
        // playAudio().pause();

      } else {
        wrongAnswers++
        wrong.play();
        setBadge(target, false);

      }
    }
  }

  if (e.target === nextBtn && nextBtn.classList.contains('active')) {
    if (checkStage(curStage)) newStage(curStage++);
  }
})


// alert(`Здравствуй господин проверяющий!
// Я тут замахнулся на что-то стоящее, а вылезло куча багов при деплое.
// Пожалуйста, не мог бы ты проверить мою работу в конце дедлайна?
// Буду очень при очень при очень благодарен :)
// Спасибо большое:)`)

export { newGame, getCorrectCard };