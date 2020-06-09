const body = document.querySelector(`body`);
const modal = document.querySelector(`.modal`);
const modalWrapper = document.querySelector(`.modal__wrapper`);
const openModal = document.querySelector(`.open-js`);
const buttonsClose = document.querySelector(`.modal__close`);

const getScrollbarWidth = function () {
  const outer = document.createElement(`div`);
  outer.style.visibility = `hidden`;
  outer.style.overflow = `scroll`;
  outer.style.msOverflowStyle = `scrollbar`;
  body.appendChild(outer);
  const inner = document.createElement(`div`);
  outer.appendChild(inner);
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
};

const disableScrolling = function () {
  const scrollWidth = getScrollbarWidth();
  body.setAttribute(`style`, `padding-right: ${scrollWidth}px;`);
  body.classList.add(`scroll-lock`);
};

const enableScrolling = function () {
  body.removeAttribute(`style`);
  body.classList.remove(`scroll-lock`);
};


const saveNameInStorage = function (el) {
  el.value = localStorage.getItem(`name`);
  el.oninput = function () {
    localStorage.setItem(`name`, el.value);
  };
};

const savePhoneInStorage = function (el) {
  el.value = localStorage.getItem(`phone`);
  el.oninput = function () {
    localStorage.setItem(`phone`, el.value);
  };
};

const saveTextareaInStorage = function (el) {
  el.value = localStorage.getItem(`message`);
  el.oninput = function () {
    localStorage.setItem(`message`, el.value);
  };
};


const showElements = function (button, popup) {
  const inputName = document.querySelector(`.name-js [name=modal-name]`);
  const inputphone = document.querySelector(`.phone-js [name=modal-phone]`);
  const textarea = document.querySelector(`.textarea-js [name=modal-message]`);


  button.addEventListener(`click`, function (evt) {
    evt.preventDefault();

    disableScrolling();

    popup.classList.add(`modal--show`);
    inputName.focus();
    saveNameInStorage(inputName);
    savePhoneInStorage(inputphone);
    saveTextareaInStorage(textarea);
  });
};

const hideElements = function (button, popup) {
  button.addEventListener(`click`, function (evt) {
    evt.preventDefault();

    enableScrolling();

    popup.classList.remove(`modal--show`);
  });
};

window.addEventListener(`keydown`, function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (modal.classList.contains(`modal--show`)) {
      enableScrolling();

      modal.classList.remove(`modal--show`);
    }
  }
});

modalWrapper.addEventListener(`mousedown`, function (evt) {
  if (evt.target === modalWrapper && evt.which === 1) {

    enableScrolling();
    modalWrapper.parentElement.classList.remove(`modal--show`);
  }
});


showElements(openModal, modal);
hideElements(buttonsClose, modal);
