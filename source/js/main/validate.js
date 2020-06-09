const validate = () => {
  const formFeedback = document.querySelector(`.feedback__form-wrapper form`);
  const nameFeedback = `feedback__name-input`;
  const phoneFeedback = `feedback__phone-input`;
  const textareaFeedback = `feedback__textarea`;
  const checkboxFeedback = `feedback__checkbox`;

  const formModal = document.querySelector(`.modal__form-wrapper form`);
  const nameModal = `modal__name-input`;
  const phoneModal = `modal__phone-input`;
  const textareaModal = `modal__textarea`;
  const checkboxModal = `modal__checkbox`;

  const validateForm = (form, name, phone, textareaName, checkboxName) => {
    const nameInput = form.querySelector(`.${name} input`);
    const phoneInput = form.querySelector(`.${phone} input`);
    const textarea = form.querySelector(`.${textareaName} textarea`);
    const checkbox = form.querySelector(`.${checkboxName} input`);

    const setErrorFor = (input) => {
      const formControl = input.parentElement;
      formControl.classList.add(`error`);
    };

    const setSuccessFor = (input) => {
      const formControl = input.parentElement;
      formControl.classList.remove(`error`);
    };


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
};

export default validate();
