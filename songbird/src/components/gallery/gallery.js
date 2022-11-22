import birdsData from "BirdsList/data.js";
import { newGame } from 'Base/base.js';
import { sliderRoll } from 'Slider/slider.js'
// import {createBirdsItem} from "Base/base.js";
import { clearPlayCards, setPlayCards, setСorrectCard, setBadge, createBirdsItem } from 'BirdsList/birds-list.js';
import { hideStartDescription, showStartDescription, setBirdDescription } from 'BirdsDescription/birds-description.js';

const descriptionWrapElem = document.querySelector('.songbird-gallery .birds-description');
const descriptionStartElem = descriptionWrapElem.querySelector('.songbird-gallery .birds-description-start');
const descriptionInfoElem = descriptionWrapElem.querySelector('.songbird-gallery .birds-description-info');

const nameElem = descriptionWrapElem.querySelector('.songbird-gallery .birds-description-info__birds-name');
const nameLatElem = descriptionWrapElem.querySelector('.songbird-gallery .birds-description-info__birds-name-lat');
const descriptionElem = descriptionWrapElem.querySelector('.songbird-gallery .birds-description-info__info-text');
const voiceBtnElem = descriptionWrapElem.querySelector('.songbird-gallery .birds-description-info__birds-voice-btn');

const birdsListElem = document.querySelector('.songbird-gallery .birds-list');
let audioIsPlay = false;

const allBirds = birdsData.flat();
// let playCards; // = [];


const cardElems = allBirds
  .map(bird => createBirdsItem(bird))
  .sort(() => Math.random() - 0.5)
  .forEach(el => birdsListElem.insertAdjacentElement('afterbegin', el));



document.addEventListener('click', (e) => {
  if (e.target.closest('.songbird-gallery .new-game-btn')) {
    sliderRoll(1);
    newGame();
  }
})