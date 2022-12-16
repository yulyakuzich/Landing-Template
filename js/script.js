var burger = document.getElementById("burger");
console.log(burger);

function openMenu() {
  const menu = document.getElementById("nav");
  menu.classList.add("nav__visible");
}

burger.addEventListener("click", openMenu);
