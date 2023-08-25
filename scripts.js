const closeElem = document.querySelector(".close");
const openMenu = document.querySelector(".menu-open");

closeElem.addEventListener("click", (event) => {
  event.preventDefault();
  document.body.classList.remove("is-menu-visible");
});

openMenu.addEventListener("click", (event) => {
  event.preventDefault();
  document.body.classList.add("is-menu-visible");
});
