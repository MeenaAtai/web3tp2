import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
    container: "carte",
    style: "https://api.maptiler.com/maps/toner-v2/style.json?key=UhNcSIyvAfScAdeJGjFQ",
    center: [0, 0],
    zoom: -0.5,
    bearing: 0,
    pitch: 0,
    attributionControl : false
});

carte.on("style.load", () => {
    carte.setProjection({ type: "globe" });
});
  
// Animation de la rotation de la Terre
const speed = 15;
let lastTime = 0;
function rotate(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const elapsed = (timestamp - lastTime) / 1000;
    lastTime = timestamp;
    const center = carte.getCenter();
    center.lng += speed * elapsed;
    if (center.lng < -180) center.lng += 360;
    carte.setCenter(center);
    requestAnimationFrame(rotate);
}
requestAnimationFrame(rotate);