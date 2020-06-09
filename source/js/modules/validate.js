import {
  closeModal
} from './modal';

const formFeedback = document.querySelector(`.feedback__form-wrapper form`);
const nameFeedback = formFeedback.querySelector(`.feedback__name-input input`);
const phoneFeedback = formFeedback.querySelector(`.feedback__phone-input input`);
const textareaFeedback = formFeedback.querySelector(`.feedback__textarea textarea`);
const checkboxFeedback = formFeedback.querySelector(`.feedback__checkbox input`);

const formModal = document.querySelector(`.modal__content form`);
const nameModal = formModal.querySelector(`.modal__name-input input`);
const phoneModal = formModal.querySelector(`.modal__phone-input input`);
const textareaModal = formModal.querySelector(`.modal__textarea textarea`);
const checkboxModal = formModal.querySelector(`.modal__checkbox input`);

const validateForm = (form, name, phone, textareaName, checkboxName) => {
  const nameInput = name;
  const phoneInput = phone;
  const textarea = textareaName;
  const checkbox = checkboxName;

  const allFields = [nameInput, phoneInput, textarea, checkbox];

  const setErrorFor = (input) => {
    const formControl = input.parentElement;
    formControl.classList.add(`error`);
  };

  const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.classList.remove(`error`);
  };

  allFields.forEach((elem) => {
    elem.addEventListener(`input`, () => {
      setSuccessFor(elem);
    });
  });

  const checkInputs = () => {
    const nameInputValue = nameInput.value.trim();
    const phoneInputValue = phoneInput.value.trim();
    const textareaValue = textarea.value.trim();
    const checkboxValue = checkbox.checked;

    let countField = 0;

    if (nameInputValue === `` || nameInputValue.length < 2) {
      setErrorFor(nameInput);
    } else {
      setSuccessFor(nameInput);
      countField++;
    }

    if (phoneInputValue === `` || phoneInputValue.length < 16) {
      setErrorFor(phoneInput);
    } else {
      setSuccessFor(phoneInput);
      countField++;
    }

    if (textareaValue === `` || textareaValue.length < 30) {
      setErrorFor(textarea);
    } else {
      setSuccessFor(textarea);
      countField++;
    }

    if (!checkboxValue) {
      setErrorFor(checkbox);
    } else {
      setSuccessFor(checkbox);
      countField++;
    }

    return countField;
  };

  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();

    if (checkInputs() === 4) {
      setTimeout(() => {
        form.reset();
        closeModal();
      }, 600);
    }
  });
};

if (formFeedback) {
  validateForm(formFeedback, nameFeedback, phoneFeedback, textareaFeedback, checkboxFeedback);
}

if (formModal) {
  validateForm(formModal, nameModal, phoneModal, textareaModal, checkboxModal);
}
