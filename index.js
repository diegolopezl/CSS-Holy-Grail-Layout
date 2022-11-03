function showNavbar() {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}

function changeTheme() {
  const themeSwap = document.querySelector(".moon-sun");
  themeSwap.classList.toggle(".theme-change");
}
