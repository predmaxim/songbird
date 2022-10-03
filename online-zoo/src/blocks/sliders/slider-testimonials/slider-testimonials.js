import data from "./data";

document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.testimonials__slider');
  const slider = document.querySelector('.testimonials-container');
  let thumbBack = document.querySelector('.slider-pagination');
  let thumb = document.querySelector('.thumb');
  let sliderItems = document.querySelectorAll('.testimonials-container .item');
  let visibleItemsNumber = 0;

  let percentage = 0;
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

  for (let i = 0; i < data.length; i++) {
    slider.insertAdjacentHTML('afterbegin', itemElem);
    slider.querySelector('.avatar').src = data[i].avatar;
    slider.querySelector('.name').textContent = data[i].name;
    slider.querySelector('.location').textContent = data[i].location;
    slider.querySelector('.date').textContent = data[i].date;
    slider.querySelector('.item__text').textContent = data[i].comment;
    slider.querySelector('.item').classList.add(`user-${data[i].id}`);
  }

  function init() {
    sliderItems = document.querySelectorAll('.testimonials-container .item');
    itemWidth = sliderItems[0].offsetWidth;

    visibleItemsNumber = Math.round(container.offsetWidth / itemWidth);

    thumbBack = document.querySelector('.slider-pagination');
    thumb = document.querySelector('.thumb');

    percentage = (visibleItemsNumber / sliderItems.length * 100);

    thumb.style.width = percentage + '%';
  }

  init()


  thumb.onmousedown = function (event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      let newLeft = event.clientX - shiftX - thumbBack.getBoundingClientRect().left;

      if (newLeft < 0) {
        newLeft = 0;
      }

      let rightEdge = thumbBack.offsetWidth - thumb.offsetWidth;

      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      thumb.style.left = newLeft + 'px';
      slider.style.transition = `1s`;
      slider.style.transform = `translateX(${-newLeft * 3.81}px)`;
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }

  };

  thumb.ondragstart = function () {
    return false;
  };


  window.addEventListener('resize', init)

})








