// CURRENT YEAR //

let now = new Date();
let year = now.getFullYear();
document.querySelector(".currentyear").innerHTML = year;
// DROPDOWN //

const dropdownMenu = document.querySelector(".dropdown");
const dropdownItem = dropdownMenu.querySelectorAll(".dropdown__link");
let dropdownOpen = false;

for (let i = 0; i < dropdownItem.length; i++) {
  dropdownItem[i].addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (window.matchMedia("(max-width: 767px)").matches) {
      if (dropdownOpen == false) {
        dropdownMenu.classList.add("dropdown--expanded");
        dropdownOpen = true;
      } else {
        // сменить выбранную ссылку
        for (let i = 0; i < dropdownItem.length; i++) {
          dropdownItem[i].classList.remove("dropdown__link--active");
        }
        e.target.classList.add("dropdown__link--active");
        dropdownMenu.classList.remove("dropdown--expanded");
        dropdownOpen = false;

        // закрыть по клику вне дропа
        document.addEventListener("click", function (e) {
          dropdownMenu.classList.remove("dropdown--expanded");
          dropdownOpen = false;
        });
      }
    } else {
      for (let i = 0; i < dropdownItem.length; i++) {
        dropdownItem[i].classList.remove("dropdown__link--active");
      }
      e.target.classList.add("dropdown__link--active");
    }
  });
}

let menuOpen = false;
const menuBtn = document.querySelector('.hamburger__icon');
const menuNav = document.querySelector('.menu');

menuBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (menuOpen) {
    this.classList.remove('hamburger__icon--open');
    menuNav.classList.remove('menu--open');
  } else {
    this.classList.add('hamburger__icon--open');
    menuNav.classList.add('menu--open');
  }
  menuOpen = !menuOpen;
});
const sliderBlock = document.querySelectorAll('.slider__inner');
const pageBody = document.body;

for (let i = 0; i < sliderBlock.length; i++) {
  sliderBlock[i].addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    let closestBlock = e.target.closest('.slider__block');
    let closestModal = closestBlock.querySelector('.modal__wrp');
    closestModal.classList.add('modal__wrp--open');
    pageBody.classList.add('blurred');


    const modalBg = closestModal.querySelector('.modal__bg');
    const modalBnts = closestModal.querySelectorAll('.modal__btn');

    modalBg.addEventListener("click", function (e) {
      e.preventDefault();
      closestModal.classList.remove('modal__wrp--open');
      pageBody.classList.remove('blurred');
    });

    for (let j = 0; j < modalBnts.length; j++) {
      modalBnts[j].addEventListener("click", function (e) {
        e.preventDefault();
        closestModal.classList.remove('modal__wrp--open');
        pageBody.classList.remove('blurred');
      });
      modalBnts[j].addEventListener("submit", function (e) {
        e.preventDefault();
        closestModal.classList.remove('modal__wrp--open');
        pageBody.classList.remove('blurred');
      });
    }

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (closestModal.classList.contains("modal__wrp--open")) {
          closestModal.classList.remove('modal__wrp--open');
          pageBody.classList.remove('blurred');
        }
      }
    });
  });
}
