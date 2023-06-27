import {
  marqueeReference,
  marqueeItems,
  marqueeSettings,
} from "./marqueeSettings";

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

const updatePosition = (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  setPosition({ x: `${x - 180}px`, y: `${y - 130}px` });
};

const updateImagePosition = () => {
  const updatedItems = [...marqueeItems, ...marqueeSettings.clones];

  updatedItems.forEach((item) => {
    const image = item.querySelector(".image");
    image.style.transform = `translate(${position().x}, ${position().y})`;
  });
};

const handleMouseMove = (event) => {
  window.requestAnimationFrame(() => {
    updatePosition(event);
    updateImagePosition();
  });
};

export const trackMousePosition = () => {
  marqueeReference.addEventListener("mousemove", handleMouseMove);
};
