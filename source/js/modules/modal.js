import {
  enableScrolling,
  disableScrolling
} from '../utils/scroll-lock';

const modal = document.querySelector(`.modal`);
const openModal = document.querySelector(`.open-js`);
const buttonsClose = document.querySelector(`.modal__close`);
const overlay = document.querySelector(`.modal__overlay`);
const ESC_CODE = 27;


const closeModal = () => {
  enableScrolling();

  modal.classList.remove(`modal--show`);
};

const onEscPress = (evt) => {
  if (evt.keyCode === ESC_CODE) {
    closeModal();
  }
};

overlay.addEventListener(`click`, () => {
  closeModal();
});


const saveNameInStorage = (el) => {
  el.value = localStorage.getItem(`name`);
  el.oninput = () => {
    localStorage.setItem(`name`, el.value);
  };
};

const savePhoneInStorage = (el) => {
  el.value = localStorage.getItem(`phone`);
  el.oninput = () => {
    localStorage.setItem(`phone`, el.value);
  };
};

const saveMessageInStorage = (el) => {
  el.value = localStorage.getItem(`message`);
  el.oninput = () => {
    localStorage.setItem(`message`, el.value);
  };
};

const inputName = modal.querySelector(`.name-js [name=modal-name]`);
const inputphone = modal.querySelector(`.phone-js [name=modal-phone]`);
const textarea = modal.querySelector(`.textarea-js [name=modal-message]`);

const showModal = () => {
  window.addEventListener(`keydown`, onEscPress);

  openModal.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    disableScrolling();

    modal.classList.add(`modal--show`);

    inputName.focus();
    saveNameInStorage(inputName);
    savePhoneInStorage(inputphone);
    saveMessageInStorage(textarea);
  });
};

showModal();

buttonsClose.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  window.removeEventListener(`keydown`, onEscPress);

  closeModal();
});

export {
  closeModal
};
