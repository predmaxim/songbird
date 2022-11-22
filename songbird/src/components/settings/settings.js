document.addEventListener('DOMContentLoaded', () => {

  const settingsBlock = document.querySelector('.settings-block');
  const settingsMenu = settingsBlock.querySelector('.settings-menu');

  const settingsDark = settingsMenu.querySelector('.set-dark-theme');
  const settingsLight = settingsMenu.querySelector('.set-light-theme');
  const settingsRu = settingsMenu.querySelector('.set-ru-lang');
  const settingsEn = settingsMenu.querySelector('.set-en-lang');

  document.addEventListener('click', (e) => {
    if (e.target === settingsBlock) {
      settingsMenu.classList.toggle('dispnone');
      settingsBlock.classList.toggle('active');
    }

    if (e.target === settingsLight) {
      document.querySelector('.songbird-body').classList.remove('theme-dark');
      document.querySelector('.songbird-body').classList.add('theme-light');
      settingsDark.classList.remove('active');
      settingsLight.classList.add('active');
    }

    if (e.target === settingsDark ) {
      document.querySelector('.songbird-body').classList.remove('theme-light');
      document.querySelector('.songbird-body').classList.add('theme-dark');
      settingsLight.classList.remove('active');
      settingsDark.classList.add('active');
    }

    if (e.target === settingsRu || e.target === settingsEn) {
      settingsRu.classList.toggle('active');
      settingsEn.classList.toggle('active');
    }

  })



})

