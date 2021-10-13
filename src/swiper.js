import Swiper from "swiper/swiper-bundle";

export const swiper = new Swiper(".swiper", {
  speed: 800,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
