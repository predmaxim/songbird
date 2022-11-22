import { newGame } from 'Base/base.js';

const homePlayBtn = document.querySelector('button.songbird-home-play-btn');
const newGameBtn = document.querySelector('button.new-game-btn');
const slider = document.querySelector('.slider');
let sliderWidth = document.body.offsetWidth;
let curSlider = 0;

const sliderRoll = (toSlide) => {

  if (toSlide) curSlider = toSlide;
  else curSlider++;

  slider.style.transform = `translateX(-${curSlider * sliderWidth}px)`;
}


document.addEventListener('click', (e) => {
  if (e.target === homePlayBtn) {
    sliderRoll();
    newGame();
  };

  if (e.target === newGameBtn) {
    sliderRoll(1);
    newGame();
  }

  if (e.target.closest('.gallery')) {
    document.querySelector('.score').classList.add('dispnone');
    sliderRoll(3);
  }

  if (e.target.closest('.logo')) {
    curSlider = 0
    slider.style.transform = `translateX(-${curSlider * sliderWidth}px)`;
  }

})

window.addEventListener('resize', () => {
  sliderWidth = document.body.offsetWidth;
  slider.style.transform = `translateX(-${curSlider * sliderWidth}px)`;
});

export { sliderRoll };