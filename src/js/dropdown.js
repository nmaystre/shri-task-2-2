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
