import { initializeMarquee } from "./marqueeComponent";
import { resetInitialize } from "./resetUtils";

window.addEventListener("load", initializeMarquee);
window.addEventListener("resize", resetInitialize);