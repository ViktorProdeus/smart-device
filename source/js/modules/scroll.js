window.addEventListener(`load`, () => {

  // eslint-disable-next-line no-undef
  const moveTo = new MoveTo();

  const scrollButton = document.querySelector(`.intro__scroll-btn`);

  const introButton = document.querySelector(`.intro__btn`);

  if (scrollButton) {

    const advantagesBlock = document.querySelector(`.advantages`);

    scrollButton.addEventListener(`click`, () => {
      moveTo.move(advantagesBlock);
    });
  }
  if (introButton) {

    const feedbackBlock = document.querySelector(`.feedback`);

    introButton.addEventListener(`click`, () => {
      moveTo.move(feedbackBlock);
    });
  }
});
