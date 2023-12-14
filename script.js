const menuBtn = document.querySelector(".mobile-menu-icon");
const headerNav = document.querySelector("#header-nav");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-open");
  headerNav.classList.toggle("menu-open");
});

const navLists = document.querySelectorAll(".nav-list");

navLists.forEach((navList, index) => {
  navList.addEventListener("click", (e) => {
    openIndex = index;
    e.target.parentNode.classList.toggle("list-open");

    navLists.forEach((navList, index) => {
      if (openIndex !== index) {
        console.log(navList);
        navList.classList.remove("list-open");
      }
    });
  });
});
