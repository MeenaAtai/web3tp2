import Chart from "chart.js/auto";

const ctx = document.getElementById("chartTest");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["A", "B", "C"],
        datasets: [{
            label: "Test",
            data: [12, 19, 7],
            backgroundColor: ["red", "blue", "green"]
        }]
    }
});
