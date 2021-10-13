import swiper from "./swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import toogleTopButton from "./topButton";

AOS.init({
  duration: 800,
  anchorPlacement: "top-bottom",
  once: true,
});

toogleTopButton();
