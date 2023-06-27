import { marqueeItems } from "./marqueeSettings";
import { trackMousePosition } from "./imagePositionUtils";
import { createAnimation } from "./animationUtils";
import { cloneItem, calculateClonesWidth } from "./clonesUtils";
import { handleMarqueeHover } from "./hoverUtils";

export const initializeMarquee = () => {
  marqueeItems.forEach(cloneItem);
  calculateClonesWidth();
  handleMarqueeHover();
  trackMousePosition();
  createAnimation();
};
