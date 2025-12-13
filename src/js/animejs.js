import { animate, svg } from "https://esm.sh/animejs";

const drawable = svg.createDrawable(".ligne");

animate(drawable, {
  draw: ["0 0", "0 1", "1 1"],
  loop: true,
  alternate: true,
  duration: 2500,
  loopDelay: 500
});
