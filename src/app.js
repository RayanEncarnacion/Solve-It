import swiper from "./swiper";
import AOS, { init } from "aos";
import "aos/dist/aos.css";
import toogleTopButton from "./topButton";
import initMenu from "./toogleMenu";

initMenu();

AOS.init({
  duration: 800,
  anchorPlacement: "top-bottom",
  once: true,
});

if (window.location.href.slice(22, -5) !== "") return;
toogleTopButton();
