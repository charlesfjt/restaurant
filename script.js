const navOpen = document.querySelector('.burger');
const nav = document.querySelector('.mobile-nav');
const dropDownButton = document.querySelector('.drop-menu');
const dropDownMenu = document.querySelector('.dropdown-menus');

// let menuOpen = false;
navOpen.addEventListener('click', () => {
  navOpen.classList.toggle('toggle');
  nav.classList.toggle('nav-open');
  // if (!menuOpen) {
  //   navOpen.classList.add('toggle');
  //   nav.classList.add('nav-open');
  //   menuOpen = true;
  // } else {
  //   navOpen.classList.remove('toggle');
  //   nav.classList.remove('nav-open');
  //   menuOpen = false;
  // }
});

// dropDownButton.addEventListener('mouseover', () => {
//   dropDownMenu.classList.toggle('drop');
// });

// const menuLinks = document.querySelectorAll('.menu-nav');
// menuLinks.forEach((menuLink) => {
//   menuLink.addEventListener('mouseover', () => {
//     console.log(123);
//     // menuLink.classList.toggle('nav-hover');
//   });
// });