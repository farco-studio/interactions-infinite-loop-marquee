import { resetClones, resetClonesWidth } from "./clonesUtils";
import { initializeMarquee } from "./marqueeComponent";
import { resetAnimation } from "./animationUtils";

export const resetInitialize = () => {
  resetClones();
  resetClonesWidth();
  initializeMarquee();
  resetAnimation();
};