document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu__item').forEach((a) => a.href == window.location.href ? a.classList.add('active') : false);
  const menuBtn = document.querySelector('.menu-btn');
  const menuBtnIcon = menuBtn.querySelector('.mdi-menu');
  const closeBtn = document.querySelector('.close-btn');
  const closeBtnIcon = closeBtn.querySelector('.mdi-close');
  const menu = document.querySelector('header .menu');
  const overlay = document.querySelector('.overlay');
  const header = document.querySelector('header');

  function show() {
    menu.style.transform = 'translateX(0)';
    menuBtn.classList.add('opazero');
    closeBtn.classList.remove('opazero');
    overlay.classList.remove('opazero');
    header.classList.add('mob-menu-open');
    menuBtn.classList.add('mob-menu-open');
    document.body.style.overflow = 'hidden';
  }

  function hide() {
    menu.style.transform = '';
    menuBtn.classList.remove('opazero');
    closeBtn.classList.add('opazero');
    overlay.classList.add('opazero');
    header.classList.remove('mob-menu-open');
    menuBtn.classList.remove('mob-menu-open');
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

