const descriptionWrapElem = document.querySelector('.birds-description');
const descriptionStartElem = descriptionWrapElem.querySelector('.birds-description-start');
const descriptionInfoElem = descriptionWrapElem.querySelector('.birds-description-info');

const nameElem = descriptionWrapElem.querySelector('.birds-description-info__birds-name');
const nameLatElem = descriptionWrapElem.querySelector('.birds-description-info__birds-name-lat');
const descriptionElem = descriptionWrapElem.querySelector('.birds-description-info__info-text');
const voiceBtnElem = descriptionWrapElem.querySelector('.birds-description-info__birds-voice-btn');

// let audio;
let audioIsPlay = false;

const hideStartDescription = () => {
  descriptionStartElem.classList.add('dispnone');
  descriptionInfoElem.classList.remove('dispnone');
}

const showStartDescription = () => {
  descriptionStartElem.classList.remove('dispnone');
  descriptionInfoElem.classList.add('dispnone');
}

const setBirdDescription = (card) => {
  descriptionInfoElem.style.background = `url(${card.image})`;
  nameElem.textContent = card.name;
  nameLatElem.textContent = card.species;
  descriptionElem.textContent = card.description;

  const audio = new Audio(card.audio);

  voiceBtnElem.addEventListener('click', () => {
    if (audioIsPlay) stopBirdSound(audio);
    else playBirdSound(audio);
  });
}

const playBirdSound = (audio) => {
  // const p = audio.play();
  // if (p !== undefined) p.catch((err) => console.log(err));
  
  audio.play();
  voiceBtnElem.querySelector('img').src = 'assets/img/stop-btn.svg';
  audioIsPlay = true;
  console.log('play');
}

const stopBirdSound = (audio) => {
  audio.pause();
  audio.currentTime = 0;
  voiceBtnElem.querySelector('img').src = 'assets/img/play-btn.svg';
  audioIsPlay = false;
  console.log('stop');

}



export { hideStartDescription, showStartDescription, setBirdDescription, stopBirdSound };