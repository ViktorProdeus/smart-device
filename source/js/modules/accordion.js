const blockNav = document.querySelector(`.main-footer__navigation-tab`);
const blockContact = document.querySelector(`.main-footer__contacts-tab`);

const hideBlock = (block) => {
  block.parentNode.classList.remove(`open-js`);
};


const showBlock = (block) => {
  block.parentNode.classList.add(`open-js`);
};


blockNav.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  if (blockNav.parentNode.classList.contains(`open-js`)) {
    hideBlock(blockNav);

  } else {
    showBlock(blockNav);
    hideBlock(blockContact);
  }
});


blockContact.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  if (blockContact.parentNode.classList.contains(`open-js`)) {
    hideBlock(blockContact);
  } else {
    showBlock(blockContact);
    hideBlock(blockNav);
  }
});
