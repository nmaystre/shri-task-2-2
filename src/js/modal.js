const sliderBlock = document.querySelectorAll('.slider__inner');

for (let i = 0; i < sliderBlock.length; i++) {
  sliderBlock[i].addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    let closestBlock = e.target.closest('.slider__block');
    let closestModal = closestBlock.querySelector('.modal__wrp');
    closestModal.classList.add('modal__wrp--open');

    const modalBg = closestModal.querySelector('.modal__bg');
    const modalBnts = closestModal.querySelectorAll('.modal__btn');

    modalBg.addEventListener("click", function (e) {
      e.preventDefault();
      closestModal.classList.remove('modal__wrp--open');
    });

    for (let j = 0; j < modalBnts.length; j++) {
      modalBnts[j].addEventListener("click", function (e) {
        e.preventDefault();
        closestModal.classList.remove('modal__wrp--open');
      });
      modalBnts[j].addEventListener("submit", function (e) {
        e.preventDefault();
        closestModal.classList.remove('modal__wrp--open');
      });
    }

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (closestModal.classList.contains("modal__wrp--open")) {
          closestModal.classList.remove('modal__wrp--open');
        }
      }
    });
  });
}
