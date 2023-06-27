
const marqueeItems = Array.from(document.querySelectorAll(".marquee-item"));
const marqueeReference = document.querySelector(".marquee-block");

let marqueeSettings = {
    animation: null,
    transitionSpeed: 20,
    clonesWidth: 0,
    clones: [],
}

export { marqueeSettings, marqueeReference, marqueeItems }