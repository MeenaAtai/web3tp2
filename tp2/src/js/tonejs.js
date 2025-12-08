import * as Tone from "tone.js";
import { ToneVisualizer } from "tone-visualizer";

// AUDIO + VISUALIZER
const player = new Tone.Player(
    "https://www.youtube.com/watch?v=S2kymv60ndQ"
).toDestination();

document.querySelector("#playBtn").addEventListener("click", async () => {

    await Tone.start();
    await Tone.loaded();

    // Visualize inside overlay container
    new ToneVisualizer(".visualizer", player, {
        Tone,
        type: "oscilloscope",
        strokeColor: [0, 0, 0, 255],
        strokeWeight: 2
    });

    player.start();
});

