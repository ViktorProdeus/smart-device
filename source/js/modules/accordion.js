const blockNav = document.querySelector(`.main-footer__navigation`);
const blockContact = document.querySelector(`.main-footer__contacts`);

const hideBlock = (block) => {
  block.classList.remove(`open-js`);
};


const showBlock = (block) => {
  block.classList.add(`open-js`);
};


blockNav.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  if (blockNav.classList.contains(`open-js`)) {
    hideBlock(blockNav);

  } else {
    showBlock(blockNav);
    hideBlock(blockContact);
  }
});


blockContact.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  if (blockContact.classList.contains(`open-js`)) {
    hideBlock(blockContact);
  } else {
    showBlock(blockContact);
    hideBlock(blockNav);
  }
});
