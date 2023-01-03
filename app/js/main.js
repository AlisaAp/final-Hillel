(function () {
  const headerBurgerBtn = document.querySelector(".header__burger");
  const headerNavigation = document.querySelector(".header-nav");
  const headerButtonCloseNav = document.querySelector(".header-nav__close");

  headerBurgerBtn.addEventListener("click", (e) => {
    headerNavigation.classList.add("active");
    headerBurgerBtn.classList.add("active2");
  });

  headerButtonCloseNav.addEventListener("click", (e) => {
    headerNavigation.classList.remove("active");
    headerBurgerBtn.classList.remove("active2");
  });
})();

//SWIPER//

const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,

  // autoplay: {
  // 	delay: 1000,
  // },
  // effect: "cards",
});

//TABS//

(function () {
  const tabsItem = document.querySelectorAll(".tabs__item");
  const tabsBlock = document.querySelectorAll(".tabs__block");
  tabsItem.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      tabsBlock.forEach((content) => {
        content.classList.remove("active");
      });
      tabsItem.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabsItem[index].classList.add("active");
      tabsBlock[index].classList.add("active");
    });
  });
})();

(function () {
  const langLink = document.querySelectorAll(".header__lang-link");
  const langItem = document.querySelectorAll(".header__lang-item");
  langLink.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      langItem.forEach((content) => {
        content.classList.remove("active");
      });
      langLink.forEach((content) => {
        content.classList.remove("active");
      });
      langItem[index].classList.add("active");
      langLink[index].classList.add("active");
    });
  });
})();
//SNOW//
(function () {
  const snowflakes = new Snowflakes({
    container: document.querySelector(".wrapper"),
    count: 100,
  });
})();
