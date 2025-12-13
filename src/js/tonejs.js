import * as Tone from "https://esm.sh/tone@15.1.22";
import { ToneVisualizer } from "https://unpkg.com/tone-visualizer/dist/visualizer.esm.js";

const player = new Tone.Player({
    url :"assets/audio/sound.mp3",
    loop: false
}).toDestination();

let visualizer;

document.querySelector("#playBtn").addEventListener("click", async () => {

    await Tone.start();
    await Tone.loaded();

    if (!visualizer) {
        visualizer = new ToneVisualizer(".visualizer", player.output, {
            Tone,
            type: "oscilloscope",
            strokeColor: [0, 255, 255, 255],
            strokeWeight: 2,
            
        });
    }

    player.start();
});

