window.addEventListener(`load`, () => {
  const buttonNav = document.querySelector(`.main-footer__toggle-btn--nav`);
  const buttonContact = document.querySelector(`.main-footer__toggle-btn--contacts`);
  const blockNav = document.querySelector(`.main-footer__navigation`);
  const blockContact = document.querySelector(`.main-footer__contacts`);

  const hideBlock = function (block, btn) {
    if (btn) {
      block.classList.remove(`open-js`);
    }
  };

  const showBlock = function (block, btn) {
    if (btn) {
      block.classList.add(`open-js`);
    }
  };

  if (buttonNav) {
    buttonNav.addEventListener(`click`, function (evt) {
      evt.preventDefault();
      if (blockNav.classList.contains(`open-js`)) {
        hideBlock(blockNav, buttonNav);

      } else {
        showBlock(blockNav, buttonNav);
        hideBlock(blockContact, buttonContact);
      }
    });
  }

  if (buttonContact) {
    buttonContact.addEventListener(`click`, function (evt) {
      evt.preventDefault();
      if (blockContact.classList.contains(`open-js`)) {
        hideBlock(blockContact, buttonContact);
      } else {
        showBlock(blockContact, buttonContact);
        hideBlock(blockNav, buttonNav);
      }
    });
  }

});
