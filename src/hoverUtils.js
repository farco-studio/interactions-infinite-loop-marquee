import { marqueeReference, marqueeSettings } from "./marqueeSettings";

export const handleMarqueeHover = () => {
  marqueeReference.addEventListener("mouseover", () =>
    marqueeSettings.animation.timeScale(0.3)
  );
  marqueeReference.addEventListener("mouseout", () =>
    marqueeSettings.animation.timeScale(1)
  );
};
