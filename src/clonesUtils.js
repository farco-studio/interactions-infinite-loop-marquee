import { marqueeReference, marqueeSettings } from "./marqueeSettings";

const cloneItem = (item) => {
  const clone = item.cloneNode(true);
  clone.classList.add("is-clone");
  marqueeReference.appendChild(clone);
  marqueeSettings.clones.push(clone);
};

const calculateClonesWidth = () => {
  marqueeSettings.clonesWidth = marqueeSettings.clones.reduce(
    (width, clone) => width + clone.offsetWidth,
    0
  );
};

const resetClonesWidth = () => {
  marqueeSettings.clonesWidth = 0;
  marqueeSettings.clones.forEach((clone) => {
    marqueeSettings.clonesWidth += clone.offsetWidth;
  });
};

const resetClones = () => {
  marqueeSettings.clones = [];
};

export {
  resetClonesWidth,
  resetClones,
  cloneItem,
  calculateClonesWidth,
};
