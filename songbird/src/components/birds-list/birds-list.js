import birdsData from "./data.js";

const birdsListElem = document.querySelector('.birds-list');
const okBadge = 'assets/img/v.svg';
const wrongBadge = 'assets/img/x.svg';

// random
const random = (min, max, amount) => {
  return Array(max)
    .fill()
    .map((_, i) => i + 1)
    .sort(() => Math.random() - 0.5)
    .sort(() => Math.random() - 0.5)
    .sort(() => Math.random() - 0.5)
    .sort(() => Math.random() - 0.5)
    .sort(() => Math.random() - 0.5)
    .splice(min, amount);
};

// create Birds Item
const createBirdsItem = ({ name, id, image }) => {

  const birdsListItem = document.createElement('div');
  birdsListItem.className = 'birds-list__item';
  birdsListItem.id = id;

  const birdsItemImg = document.createElement('img');
  birdsItemImg.className = 'birds-item-img';
  birdsItemImg.src = image;
  birdsItemImg.alt = name;

  const birdsItemName = document.createElement('p');
  birdsItemName.className = 'birds-item-name';
  birdsItemName.textContent = name;

  const badgeImg = document.createElement('img');
  badgeImg.className = 'birds-item-badge';

  birdsListItem.appendChild(birdsItemImg)
  birdsListItem.appendChild(birdsItemName)
  birdsListItem.appendChild(badgeImg)

  return birdsListItem;
};

// clear Cards
const clearPlayCards = () => {
  if (birdsListElem.hasChildNodes()) birdsListElem.replaceChildren();
};

// set Сorrect Card random from Play Cards
const setСorrectCard = (stageNum) => {
  const r = random(0, 5, 1)[0]
  return birdsData[stageNum][r];
};

// set Play Cards
const setPlayCards = (stageNum) => {
  const cards = birdsData[stageNum]
  const cardElems = cards
    .sort(() => Math.random() - 0.5)
    .map(card => createBirdsItem(card));

  cardElems.forEach(el => birdsListElem.insertAdjacentElement('afterbegin', el));
  // birdsListElem.replaceChildren(...cardElems);
  return cards;
};

// set Badge
const setBadge = (target, boolean) => {
  if (boolean) target.querySelector('.birds-item-badge').src = okBadge;
  else target.querySelector('.birds-item-badge').src = wrongBadge;
}



export { setPlayCards, clearPlayCards, setСorrectCard, setBadge };
