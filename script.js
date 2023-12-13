const menuBtn = document.querySelector(".mobile-menu-icon");
const nav = document.documentElement(nav);
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-open");
  nav.classList.toggle("menu-open");
});

const navLists = document.querySelectorAll(".nav-list");

navLists.forEach((navList, index) => {
  navList.addEventListener("click", (e) => {
    openIndex = index;
    e.target.parentNode.classList.toggle("list-open");

    navLists.forEach((navList, index) => {
      if (openIndex !== index) {
        navList.parentNode.classList.remove("list-opne");
      }
    });
  });
});
