import data from "./data";

document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.testimonials__slider');
  const slider = document.querySelector('.testimonials-container');
  const sliderTrack = document.querySelector('.pagination__slider');
  let sliderItems;
  // let visibleItemsNumber = 0;
  let itemWidth = 0;

  const itemElem = `
    <div class="item">
      <div class="item__header" >
        <img src="" class="avatar" ></img>
        <div class="header-text" >
          <div class="name"></div>
          <div class="info">
            <div class="location"></div>
            <div class="date"></div>
          </div>
        </div>
      </div>
      <div class="item__text"></div>
      <div class="item__wrapper"></div>
    </div>`

  data.forEach((el) => {
    slider.insertAdjacentHTML('afterbegin', itemElem);
    slider.querySelector('.avatar').src = el.avatar;
    slider.querySelector('.name').textContent = el.name;
    slider.querySelector('.location').textContent = el.location;
    slider.querySelector('.date').textContent = el.date;
    slider.querySelector('.item__text').textContent = el.comment;
    slider.querySelector('.item').classList.add(`user-${el.id}`);
  })

  const init = () => {
    sliderItems = document.querySelectorAll('.testimonials-container .item');
    itemWidth = sliderItems[0].offsetWidth + 29;
    // visibleItemsNumber = Math.round(container.offsetWidth / itemWidth);
  }

  const rollSlider = (num, width) => slider.style.transform = `translateX(-${num * width}px)`;

  init()
  document.addEventListener('input', e => e.target == sliderTrack ? rollSlider(e.target.value, itemWidth) : false)
  window.addEventListener('resize', init);

})








