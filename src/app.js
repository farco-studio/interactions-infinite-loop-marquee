import { gsap } from "gsap";

let items = [...document.querySelectorAll(".marquee-item")];
let reference = document.querySelector(".marquee-block");
let transitionSpeed = 20;
let clones = [];
let clonesWidth = 0;
let animation;

const useState = (defaultValue) => {
  let value = defaultValue;
  const getValue = () => value;
  const setValue = (newValue) => (value = newValue);
  return [getValue, setValue];
};

const [position, setPosition] = useState({
  x: "0px",
  y: "0px",
});

const positions = (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  setPosition({ x: `${x - 180}px`, y: `${y - 130}px` });
};

const callback = (event) => {
  window.requestAnimationFrame(() => {
    positions(event);
    setImagePosition();
  });
};

const setImagePosition = () => {
  let updatedItems = [...items, ...clones];

  updatedItems.forEach((item) => {
    let image = item.querySelector(".image");
    image.style.transform = `translate(${position().x}, ${position().y})`;

    return image;
  });
};

const getMousePosition = () => {
  reference.addEventListener("mousemove", (event) => callback(event));
  return reference.removeEventListener("mousemove", (event) => callback(event));
};

const cloneItems = (item) => {
  let clone = item.cloneNode(true);
  clone.classList.add("is-clone");
  reference.appendChild(clone);
  clones.push(clone);
};

const getClonesWidth = (clone) => {
  clonesWidth += clone.offsetWidth;

  return clonesWidth;
};

const hoverMarquee = () => {
  reference.addEventListener("mouseover", () => animation.timeScale(0.3));
  reference.addEventListener("mouseout", () => animation.timeScale(1));
};

const createAnimation = () => {
  if (!animation) animation = createTween(reference);
};

const startMarquee = () => {
  // cloneItems();
  items.forEach((item) => {
    cloneItems(item);
  });

  clones.forEach((clone) => {
    getClonesWidth(clone);
  });

  console.log(clonesWidth)

  // getClonesWidth();
  hoverMarquee();
  getMousePosition();
  createAnimation();
};

const resetClonesWidth = () => {
  clonesWidth = 0;
  return clonesWidth;
};

const resetClones = () => {
  clones = [];
  return clones;
};

const resetAnimation = () => {
  resetClones();
  resetClonesWidth();
  startMarquee();
  animation.kill();
  animation.restart();
  animation.clear();
  animation = createTween(reference);
};

const createTween = () => {
  return gsap.timeline().to(reference, {
    x: -clonesWidth,
    duration: transitionSpeed,
    ease: "linear",
    repeat: -1,
    overwrite: true,
  });
};

window.addEventListener("load", () => {
  startMarquee();
});

window.addEventListener("resize", () => {
  resetAnimation();
});
