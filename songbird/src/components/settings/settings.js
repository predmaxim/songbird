import { setLang } from "Lang/lang.js";

const settingsBlock = document.querySelector('.settings-block');
const settingsMenu = settingsBlock.querySelector('.settings-menu');

const settingsDark = settingsMenu.querySelector('.set-dark-theme');
const settingsLight = settingsMenu.querySelector('.set-light-theme');
const settingsRu = settingsMenu.querySelector('.set-ru-lang');
const settingsEn = settingsMenu.querySelector('.set-en-lang');

document.addEventListener('click', (e) => {
  if (e.target.closest('.settings-block')) {
    settingsMenu.classList.toggle('dispnone');
    settingsBlock.classList.toggle('active');
  }

  if (!e.target.closest('.settings-block')) {
    settingsBlock.classList.remove('active');
    settingsMenu.classList.add('dispnone');
  }

  if (e.target === settingsLight) {
    document.querySelector('.songbird-body').classList.remove('theme-dark');
    document.querySelector('.songbird-body').classList.add('theme-light');
    settingsDark.classList.remove('active');
    settingsLight.classList.add('active');
  }

  if (e.target === settingsDark) {
    document.querySelector('.songbird-body').classList.remove('theme-light');
    document.querySelector('.songbird-body').classList.add('theme-dark');
    settingsLight.classList.remove('active');
    settingsDark.classList.add('active');
  }

  if (e.target === settingsRu) {
    settingsEn.classList.remove('active');
    settingsRu.classList.add('active');
    setLang('ru');
  }

  if (e.target === settingsEn) {
    settingsRu.classList.remove('active');
    settingsEn.classList.add('active');
    setLang('en');
  }

})


