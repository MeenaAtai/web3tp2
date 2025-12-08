import * as Tone from "tone.js";
import { ToneVisualizer } from "tone-visualizer";

// AUDIO + VISUALIZER
const player = new Tone.Player(
    "nebula-digital-futuristic-sci-fi-music-217626.mp3"
).toDestination();

document.querySelector("button").addEventListener("click", async () => {

    await Tone.start();
    await Tone.loaded();

    // Visualize inside overlay container
    new ToneVisualizer(".visualizer-container", player, {
        Tone,
        type: "oscilloscope",
        strokeColor: [0, 0, 0, 255],
        strokeWeight: 2
    });

    player.start();
});

