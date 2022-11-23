const languages = {
  home: {
    homeText: {
      en: `Are you looking for a word puzzle game?<br><br>
            We have a bird quiz game where you can show off your word game skills. Challenging yourself with a words game is the best way to enhance your vocabulary.
            You can test your knowledge as well as learn the name of new birds and animals. Guess the bird is a word game where you have to find the name of birds and animals to complete the puzzles.
            <br><br>You can identify mammals, birds, and animals you have seen in a zoo with pictures. Word games are fun-filled learning methods that help you improve vocabulary and increase brain activity.`,
      ru: `Вы ищете игру-головоломку со словами?<br><br>
            У нас есть игра-викторина о птицах, где вы можете продемонстрировать свои навыки игры в слова. Словесная игра — лучший способ расширить свой словарный запас.
            Вы можете проверить свои знания, а также узнать названия новых птиц и животных. Угадай птицу — это словесная игра, в которой вам нужно найти названия птиц и животных, чтобы решить головоломки.
            <br><br>Вы можете идентифицировать млекопитающих, птиц и животных, которых видели в зоопарке, по картинкам. Игры со словами — это увлекательные методы обучения, которые помогают расширить словарный запас и повысить активность мозга.`,
    },
    homeBtn: {
      en: 'Play',
      ru: 'Играть'
    },
  },

  lavel: {
    en: ['Warm up', 'Passerines', 'Forest birds', 'Songbirds', 'Predator birds', 'Sea birds'],
    ru: ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'],
  },
  bd: {
    start: {
      en: ['Listen to the player and select a bird from the list', 'Here will be information about the selected bird'],
      ru: ['Прослушайте игрока и выберите птицу из списка', 'Здесь будет информация о выбранной птице'],
    },
  },
  score: {
    en: 'Your score:',
    ru: 'Ваши очки:',
  },
  gallery: {
    start: {
      en: 'Here will be information about the selected bird',
      ru: 'Здесь будет информация о выбранной птице'
    },
    headerBlock: {
      en: 'Gallery',
      ru: 'Галлерея',
    },
    newGameBtn: {
      en: 'Start new game',
      ru: 'Начать новую игру'
    },
  },
  settings: {
    settingsBlock: {
      en: 'Settings',
      ru: 'Настройки',
    },
    theme: {
      en: ['Dark', 'Light'],
      ru: ['Темн', 'Светл'],
    },
    language: {
      en: ['Ru', 'En'],
      ru: ['Рус', 'Англ'],
    }
  },
  result: {
    text: {
      en: ['Congratulation', 'You scored <span class="score-you-scored"> 0</span> out of <span class="score-out-of">30</span> points.', ` Let's play again`],
      ru: ['Поздравляем', 'Вы набрали <span class="score-you-scored"> 0</span> из <span class="score-out-of">30</span> очков.', `Давай поиграем еще`],
    },
    newGameBtn: {
      en: 'Start new game',
      ru: 'Начать новую игру'
    },
  }


}

const setLang = (lang) => {
  console.log(languages.settings.theme[lang])
  // HOME
  document.querySelector('.songbird-home-text p').innerHTML = languages.home.homeText[lang];
  document.querySelector('.songbird-home-play-btn').textContent = languages.home.homeBtn[lang];

  // BD START
  document.querySelector('.songbird-game .birds-description-start__mess-header').textContent = languages.bd.start[lang][0];
  document.querySelector('.songbird-game .birds-description-start__mess-body').textContent = languages.bd.start[lang][1];

  // GALLERY
  document.querySelector('.gallery a').textContent = languages.gallery.headerBlock[lang];
  document.querySelector('.songbird-gallery .birds-description-start__mess-header').textContent = languages.gallery.start[lang];
  document.querySelector('.songbird-gallery .new-game-btn').textContent = languages.gallery.newGameBtn[lang];

  // RESULT
  document.querySelector('.songbird-result__congratulation').textContent = languages.result.text[lang][0];
  document.querySelector('.songbird-result__score').innerHTML = languages.result.text[lang][1];
  document.querySelector('.songbird-result__again').textContent = languages.result.text[lang][2];
  document.querySelector('.songbird-result .new-game-btn').textContent = languages.result.newGameBtn[lang];

  // LAVEL
  document.querySelectorAll('.lavel__item').forEach((el, i) => el.textContent = languages.lavel[lang][i]);

  // SCORE
  document.querySelector('.scrore-block span').textContent = languages.score[lang];

  // SETTINGS
  document.querySelector('.settings-block span').textContent = languages.settings.settingsBlock[lang];
  document.querySelector('.set-dark-theme').textContent = languages.settings.theme[lang][0];
  document.querySelector('.set-light-theme').textContent = languages.settings.theme[lang][1];
  document.querySelector('.set-ru-lang').textContent = languages.settings.language[lang][0];
  document.querySelector('.set-en-lang').textContent = languages.settings.language[lang][1];
}

export { setLang };