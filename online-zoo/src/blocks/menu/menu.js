document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu__item').forEach((a) => a.href == window.location.href ? a.classList.add('active') : false);
  const menuBtn = document.querySelector('.menu-btn');
  const menuBtnIcon = document.querySelector('.mdi-menu');
  const closeBtn = document.querySelector('.close-btn');
  const closeBtnIcon = document.querySelector('.mdi-close');
  const menu = document.querySelector('header .menu');
  const overlay = document.querySelector('.overlay');
  const header = document.querySelector('header');

  function show() {
    menu.style.transform = 'translateX(0)';
    menuBtn.classList.toggle('opazero');
    closeBtn.classList.toggle('opazero');
    overlay.classList.toggle('opazero');
    header.classList.toggle('mob-menu-open');
    menuBtn.classList.toggle('mob-menu-open');
    document.body.style.overflow = 'hidden';
  }

  function hide() {
    menu.style.transform = '';
    menuBtn.classList.toggle('opazero');
    closeBtn.classList.toggle('opazero');
    overlay.classList.toggle('opazero');
    header.classList.toggle('mob-menu-open');
    menuBtn.classList.toggle('mob-menu-open');
    document.body.style.overflow = '';
  }

  addEventListener('click', (e) => {
    if (e.target == menuBtn
      || e.target == menuBtnIcon) {
      show();
    }

    if (e.target == closeBtn
      || e.target == closeBtnIcon
      || e.target == overlay
      || e.target == menu) {
      hide();
    }
  })
})

