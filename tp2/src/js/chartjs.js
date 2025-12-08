import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";

new Chart(document.querySelector("#a"), {
  type: "line",
  data: {
    datasets: [{
      data: [
        { x: "2025-05-01", y: 200 },
        { x: "2025-05-02", y: 250 }
      ]
    }]
  },
  options: {
    scales: {
      x: { type: "time" }
    }
  }
});



// Décommenter pour animer
//
// setInterval(() => {
//   for (let ds of graphique.data.datasets) {
//     for (let i = 0; i < ds.data.length; i++) {
//       const currentY = parseFloat(ds.data[i].y);
//       const random = Math.round(Math.random() * 20000 - 10000);
//       ds.data[i].y = Math.max(0, currentY + random);
//     }
//   }
//   graphique.update();
// }, 100);
