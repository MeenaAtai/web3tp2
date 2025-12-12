import * as Tone from "https://esm.sh/tone@15.1.22";
import { ToneVisualizer } from "https://unpkg.com/tone-visualizer/dist/visualizer.esm.js";

// AUDIO + VISUALIZER
const player = new Tone.Player(
    "nebula.mp3"
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

