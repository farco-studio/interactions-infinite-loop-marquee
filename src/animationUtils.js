import { gsap } from "gsap";
import { marqueeSettings, marqueeReference } from "./marqueeSettings";

const createTimeline = () => {
  return gsap.timeline().to(marqueeReference, {
    x: -marqueeSettings.clonesWidth,
    duration: marqueeSettings.transitionSpeed,
    ease: "linear",
    repeat: -1,
    overwrite: true,
  });
};

const createAnimation = () => {
  if (!marqueeSettings.animation) marqueeSettings.animation = createTimeline();
};

const resetAnimation = () => {
  marqueeSettings.animation.kill();
  marqueeSettings.animation.restart();
  marqueeSettings.animation.clear();
  marqueeSettings.animation = createTimeline();
};

export { createTimeline, createAnimation, resetAnimation };
