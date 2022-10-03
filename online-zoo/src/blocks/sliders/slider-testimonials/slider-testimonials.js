import data from "./data";

document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.testimonials-container');
  // const items = container.querySelectorAll('.item');
  // const comment = container.querySelector('.item__text');
  // const userName = container.querySelector('.name');
  // const location = container.querySelector('.location');
  // const date = container.querySelector('.date');
  // const avatar = container.querySelector('.avatar').src;
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

  const setSlider = () => {
    for (let i = 0; i < data.length; i++) {
      container.insertAdjacentHTML('afterbegin', itemElem);
      container.querySelector('.avatar').src = data[i].avatar;
      container.querySelector('.name').textContent = data[i].name;
      container.querySelector('.location').textContent = data[i].location;
      container.querySelector('.date').textContent = data[i].date;
      container.querySelector('.item__text').textContent = data[i].comment;
      container.querySelector('.item').classList.add(`user-${data[i].id}`);
    }

  }

  setSlider()

})








