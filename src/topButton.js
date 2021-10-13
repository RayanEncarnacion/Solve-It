const topButton = document.querySelector(".top-button");
const carousel = document.querySelector(".swiper");

const displayButton = (e) => {
  const [entry] = e;

  if (entry.isIntersecting) {
    topButton.classList.add("hidden");
    topButton.classList.remove("flex");
  } else {
    topButton.classList.add("flex");
    topButton.classList.remove("hidden");
  }
};

const carouselObserver = new IntersectionObserver(displayButton, {
  root: null,
  threshold: 0,
});

export default function () {
  if (window.innerWidth >= 1024) carouselObserver.observe(carousel);
}
