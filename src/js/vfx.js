import { VFX } from "https://esm.sh/@vfx-js/core";

const vfx = new VFX();
document.querySelectorAll("p, img, h1").forEach((target) => {
  vfx.add(target, {
    shader: "rgbShift",
    overflow: 20
  });
});
