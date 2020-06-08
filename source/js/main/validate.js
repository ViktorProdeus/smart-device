const validate = () => {
  const formFeedback = document.querySelector(`.feedback__form-wrapper form`);

  const validateForm = (form) => {
    const nameInput = formFeedback.querySelector(`.name-js input`);
    const phoneInput = formFeedback.querySelector(`.phone-js input`);
    const textarea = formFeedback.querySelector(`.textarea-js textarea`);
    const checkbox = formFeedback.querySelector(`.checkbox-js input`);

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

  validateForm(formFeedback);

};

export default validate();
