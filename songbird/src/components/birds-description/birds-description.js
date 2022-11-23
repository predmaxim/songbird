import { getPlayerAudio } from 'Player/player.js';

const descriptionWrapElem = document.querySelector('.birds-description');
const descriptionStartElem = descriptionWrapElem.querySelector('.birds-description-start');
const descriptionInfoElem = descriptionWrapElem.querySelector('.birds-description-info');

const nameElem = descriptionWrapElem.querySelector('.birds-description-info__birds-name');
const nameLatElem = descriptionWrapElem.querySelector('.birds-description-info__birds-name-lat');
const descriptionElem = descriptionWrapElem.querySelector('.birds-description-info__info-text');
const voiceBtnElem = descriptionWrapElem.querySelector('.birds-description-info__birds-voice-btn');

let audio = new Audio();
audio.controls = 'true'
let isPlay = false;

const hideStartDescription = () => {
  descriptionStartElem.classList.add('dispnone');
  descriptionInfoElem.classList.remove('dispnone');
}

const showStartDescription = () => {
  descriptionStartElem.classList.remove('dispnone');
  descriptionInfoElem.classList.add('dispnone');
}

const playBirdSound = (audio) => {
  if(!getPlayerAudio().paused) getPlayerAudio().pause();

  if (isPlay) {
    audio.currentTime = 0;
    voiceBtnElem.classList.add('play');
    voiceBtnElem.classList.remove('stop');
    isPlay = false;
    console.log('stop');
    audio.pause();
    audio.currentTime = 0;
  } else {
    voiceBtnElem.classList.remove('play');
    voiceBtnElem.classList.add('stop');
    isPlay = true;
    console.log('play');
    audio.play();
  }
}

const getDescAudio = () => {
  return audio;
}

const setBirdDescription = (card) => {
  descriptionInfoElem.style.background = `url(${card.image})`;
  nameElem.textContent = card.name;
  nameLatElem.textContent = card.species;
  descriptionElem.textContent = card.description;
  audio.src = card.audio;

  voiceBtnElem.addEventListener('click', () => playBirdSound(audio));
}




export { hideStartDescription, showStartDescription, setBirdDescription, getDescAudio, playBirdSound };