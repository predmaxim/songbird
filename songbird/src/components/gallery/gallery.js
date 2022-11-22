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





