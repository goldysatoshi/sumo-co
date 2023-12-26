// モバイルメニュースライド
const menuBtn = document.querySelector(".mobile-menu-icon");
const headerNav = document.querySelector("#header-nav");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-open");
  headerNav.classList.toggle("menu-open");
});

// モバイルメニューアイテム
const navLists = document.querySelectorAll(".nav-list");

navLists.forEach((navList, index) => {
  navList.addEventListener("click", (e) => {
    openIndex = index;
    e.target.parentNode.classList.toggle("list-open");

    navLists.forEach((navList, index) => {
      if (openIndex !== index) {
        navList.classList.remove("list-open");
      }
    });
  });
});

// デスクトップメニューアイテム

const dtNavLists = document.querySelectorAll(".dt-nav-list");

dtNavLists.forEach((dtNavList, index) => {
  dtNavList.addEventListener("click", (e) => {
    openIndex = index;
    e.target.parentNode.classList.toggle("dt-list-open");

    dtNavLists.forEach((dtNavList, index) => {
      if (openIndex !== index) {
        dtNavList.classList.remove("dt-list-open");
      }
    });
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
