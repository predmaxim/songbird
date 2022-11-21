// import { getRandomNum } from "./functions.js";
import { getCorrectCard } from "Base/base.js";

const player = document.querySelector('.player');
const playBtn = player.querySelector('.play img');
const muteButton = player.querySelector('.mute-button img');
const songTimer = player.querySelector('.duration-timer');

let soundProgress = player.querySelector('.sound-progress');
let soundVolume = player.querySelector('.sound-volume');
let currentTime = 0;
let duration = 0;
let restoreVolume = 0;
const audio = new Audio();
let isPlay = false;

const questImgElem = document.querySelector('.quest-img img');
const questNameElem = document.querySelector('.quest-name');

document.documentElement.classList.add('player-js');

songTimer.innerHTML = `00:00 / 00:00`;
soundVolume.value = 0.5;
soundProgress.value = 0;


const setCorrectInfoToPlayer = (card) => {
  questImgElem.src = card.image;
  questNameElem.textContent = card.name;
}

const clearPlayer = () => {
  if (isPlay) playBtn.click();

  questImgElem.src = 'assets/img/placeholder-img.svg';
  questNameElem.textContent = '**********';
  songTimer.innerHTML = `00:00 / 00:00`;
  soundProgress.value = 0;
  audio.currentTime = 0;
}

const playAudio = (audioURL) => {
  audio.src = audioURL;
  // audio.preload = 'none';
  // audio.load();
  // audio.volume = soundVolume.value;

  if (!isPlay) {
    audio.play();
    playBtn.src = 'assets/img/player-stop-btn-light.svg';
    isPlay = true;
  } else {
    audio.pause();
    playBtn.src = 'assets/img/player-play-btn-light.svg';
    isPlay = false;
  }
  return audio;
}

const muter = () => {
  if (audio.volume === 0) {
    audio.volume = restoreVolume;
    soundVolume.value = restoreVolume;
    soundVolume.style.setProperty('--val', +restoreVolume);
    muteButton.src = 'assets/img/player-volume-btn-light.svg';
  } else {
    muteButton.src = 'assets/img/mute-light.svg';
    restoreVolume = +soundVolume.value;
    audio.volume = 0;
    soundVolume.value = 0;
    soundVolume.style.setProperty('--val', +soundVolume.value);
  }
}

const seek = () => {
  audio.currentTime = soundProgress.value * duration;
  soundProgress.value = audio.currentTime;
}

const secMinFormatter = (secs) => {
  let minutes = Math.floor(secs / 60) || 0;
  let seconds = (secs - minutes * 60) || 0;

  return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}


// document.addEventListener('input', e => {
// 	e.target.style.setProperty('--val', +e.target.value);
// }, false)



document.addEventListener('click', (e) => {
  e.target.closest('.play') ? playAudio(getCorrectCard().audio) : false;
  e.target.closest('.mute-button') ? muter() : false;
})


audio.addEventListener('timeupdate', (e) => {
  currentTime = Math.floor(audio.currentTime) !== NaN ? Math.floor(audio.currentTime) : 0;
  duration = Math.floor(audio.duration) !== NaN ? Math.floor(audio.duration) : 0;

  soundProgress.value = currentTime / duration;

  songTimer.textContent = `${secMinFormatter(currentTime)} / ${secMinFormatter(duration)}`;
  soundProgress.style.setProperty('--val', +soundProgress.value);
})


document.addEventListener('input', e => {

  if (e.target === soundVolume) {
    audio.volume = +soundVolume.value;
    soundVolume.style.setProperty('--val', +soundVolume.value);
  }

  if (e.target === soundProgress) {
    audio.currentTime = soundProgress.value * duration;
    soundProgress.value = audio.currentTime;
    // soundProgress.value = currentTime / duration;
    soundProgress.style.setProperty('--val', +soundProgress.value);
  }

}, false)

export { setCorrectInfoToPlayer, clearPlayer, playAudio };
