import * as Tone from "tone.js";
import { ToneVisualizer } from "tone-visualizer";

document.body.addEventListener("click", async () => {
    await Tone.start();

    const fmSynth = new Tone.FMSynth().toDestination();
    const viz = new ToneVisualizer('.visualizer', fmSynth, {Tone});
    fmSynth.triggerAttackRelease("C3", "4n");
});

const player = new Tone.Player(
  "https://assets.codepen.io/9367036/elemental-magic-spell-impact-outgoing-228342.mp3"
).toDestination();

document.querySelector("button").addEventListener("click", async () => {
  await Tone.start();
  await Tone.loaded();

  new ToneVisualizer(".visualizer1", player, {
    Tone,
    type: "oscilloscope",
    strokeColor: [0, 0, 0, 255],
    strokeWeight: 2
  });

  player.start();
});