// var body = document.querySelectorAll("body"),
//     modalOpenBtn = document.querySelectorAll(".modal__open");
//     modalBody = document.querySelectorAll(".modal");
//
// for (var i=0; i <= modalOpen.length; i++) {
//   modalOpenBtn.onclick(function (evt) {
//     evt.preventDefault();
//     console.log('open please!');
//   });
// }


// $(document).ready(function () {
//   var $window = $(window);
//
//   // menu
//
//   var $menuBtn = $('.hamburger');
//   var $menuIcon = $('.hamburger__icon');
//   var $menu = $('.menu');
//   var $body = $('body');
//   var $menuMobileBtn = $('.js-menu__close');
//
//   $menuBtn.click(function (evt) {
//     evt.preventDefault();
//     $menu.toggleClass("open");
//     $menuIcon.toggleClass("open");
//     $body.toggleClass("menu-open");
//   });
//
//   if ($window.width() < 1239) {
//     $menuMobileBtn.click(function (evt) {
//       evt.preventDefault();
//       $menu.toggleClass("open");
//       $menuIcon.toggleClass("open");
//       $body.toggleClass("menu-open");
//     });
//   }
