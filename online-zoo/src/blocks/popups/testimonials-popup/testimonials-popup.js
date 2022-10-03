import data from "../../sliders/slider-testimonials/data";

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay');
  const items = document.querySelectorAll('.item');
  const popup = document.querySelector('.testimonials-popup');
  const closeBtn = popup.querySelector('.close-popup-btn');
  const closeBtnIcon = closeBtn.querySelector('.mdi-close');
  const reg = /item user-\d+/;

  function setUser(user) {
    console.log(user)
    popup.querySelector('.avatar').src = user.avatar;
    popup.querySelector('.name').textContent = user.name;
    popup.querySelector('.location').textContent = user.location;
    popup.querySelector('.date').textContent = user.date;
    popup.querySelector('.item__text').textContent = user.comment;
    popup.querySelector('.item').classList.add(`user-${user.id}`);
  }

  function showPopup() {
    // popup.style.transform = 'translateY(0)';
    // popup.classList.remove('opazero');
    popup.classList.add('popup-center');
    overlay.classList.remove('opazero');
    // document.body.style.overflow = 'hidden';

  }

  function hidePopup() {
    // popup.style.transform = '';
    // popup.classList.add('opazero');
    popup.classList.remove('popup-center');
    overlay.classList.add('opazero');
    document.body.style.overflow = '';
  }

  addEventListener('click', (e) => {
    if (e.target.parentElement.className.match(reg)) {
      const user = data.filter(el => el.id == e.target.parentElement.className.match(reg).input.slice(10))[0];
      setUser(user)
      showPopup();
    }

    if (e.target == closeBtn
      || e.target == closeBtnIcon
      || e.target == overlay) {
      hidePopup();
    }
  })
})