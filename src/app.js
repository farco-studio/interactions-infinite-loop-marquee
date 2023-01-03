import { gsap } from "gsap";

let items = [...document.querySelectorAll(".marquee-item")];
let transitionSpeed = 35;
let reference = document.querySelector(".marquee-block");
let clones = [];
let clonesWidth = 0;
let animation;

const cloneItems = () => {
  items.forEach((item) => {
    let clone = item.cloneNode(true);
    clone.classList.add("is-clone");
    reference.appendChild(clone);
    clones.push(clone);
  });
};

const resetClonesWidth = () => {
  clonesWidth = 0;
  return clonesWidth;
};

const resetClones = () => {
  clones = [];
  return clones;
};

const getClonesWidth = () => {
  clones.forEach((clone) => {
    clonesWidth += clone.offsetWidth;
  });

  return clonesWidth;
};

const hoverMarquee = () => {
  reference.addEventListener("mouseover", () => animation.timeScale(0.3));
  reference.addEventListener("mouseout", () => animation.timeScale(1));
};

const startMarquee = () => {
  cloneItems();
  getClonesWidth();
  hoverMarquee();
};

const resetAnimation = () => {
  resetClones();
  resetClonesWidth();
  animation.kill();
  animation.restart();
  animation.clear();
  animation = createTween(reference);
};

const createTween = () => {
  startMarquee();

  return gsap.timeline().to(reference, {
    x: -clonesWidth,
    duration: transitionSpeed,
    ease: "linear",
    repeat: -1,
    overwrite: true,
  });
};

if (!animation) animation = createTween(reference);

window.addEventListener("resize", () => {
  resetAnimation();
});
