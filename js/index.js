const button = document.querySelector(".button");
const listItems = document.querySelectorAll(".list--desktop .list__item");
const arrowIcon = document.querySelector(".arrow");
const buttonTexts = document.querySelectorAll(".button__text");

let swiper = null;
const mediaQuery = window.matchMedia("(max-width: 575px)");

button.addEventListener("click", () => {
  arrowIcon.classList.toggle("arrow-reverse");

  buttonTexts.forEach((text) => text.classList.toggle("button__text--hidden"));

  if (!mediaQuery.matches) {
    listItems.forEach((item, i) => {
      if (i > 7) {
        item.classList.toggle("list__item--hidden");
      }
    });
  }
});

function initSwiper() {
  swiper = new Swiper(".list--mobile", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function destroySwiper() {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

function handleMode(e) {
  if (e.matches) {
    initSwiper();
  } else {
    destroySwiper();
  }
}

mediaQuery.addEventListener("change", handleMode);

window.addEventListener("load", () => {
  if (mediaQuery.matches) {
    initSwiper();
  }
});
