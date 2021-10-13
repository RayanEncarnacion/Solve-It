import swiper from "./swiper";
import AOS, { init } from "aos";
import "aos/dist/aos.css";
import toogleTopButton from "./topButton";
import initMenu from "./toogleMenu";

initMenu();
toogleTopButton();
AOS.init({
  duration: 800,
  anchorPlacement: "top-bottom",
  once: true,
});

console.log("Everything working!");
